package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Users struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUsers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Users {
	return &Users{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddUser - Create a user
// Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
//
// **Notes:**
//
// - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
func (s *Users) AddUser(ctx context.Context, request operations.AddUserRequest) (*operations.AddUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/users"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserResponse = out
		}
	}

	return res, nil
}

// DeleteUser - Delete a user
// Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in.
//
// Resources and shares owned by the deleted user will be owned by the master user after the deletion.
//
// **Notes:**
//
// - You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user.
// - The primary owner of the account cannot be deleted.
func (s *Users) DeleteUser(ctx context.Context, request operations.DeleteUserRequest) (*operations.DeleteUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EmptyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EmptyResponse = out
		}
	}

	return res, nil
}

// GetUserByID - Get info for a user
// Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.
//
// **Notes:**
//
// - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.
func (s *Users) GetUserByID(ctx context.Context, request operations.GetUserByIDRequest) (*operations.GetUserByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserResponse = out
		}
	}

	return res, nil
}

// ListUsers - Get a list of users
// Get a list of the users in your account. There are three main types of searches you can do with this method:
//
// 1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored.
// 1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the "admin" `role` AND `email` addresses ending in "*@acme.com".
// 1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.
//
// **Notes:**
//
// - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
// - The homeDir is the full path to the user's home directory, not a resource ID or hash.
func (s *Users) ListUsers(ctx context.Context, request operations.ListUsersRequest) (*operations.ListUsersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/users"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserCollectionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserCollectionResponse = out
		}
	}

	return res, nil
}

// UpdateUser - Update a user
// Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.
//
// In the request body, you should only send the parameters for values that you wish to change for the user.
//
// **Notes:**
//
// - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings.
// - You cannot edit a master user with this method.
func (s *Users) UpdateUser(ctx context.Context, request operations.UpdateUserRequest) (*operations.UpdateUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UserResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserResponse = out
		}
	}

	return res, nil
}
