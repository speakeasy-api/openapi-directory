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

type Notifications struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewNotifications(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Notifications {
	return &Notifications{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddNotification - Create a new notification
// Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;
//
// - To enable email, pass an array of email addresses to the `recipients` parameter of this call.
// - To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount).
//
// **Notes:**
//   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
func (s *Notifications) AddNotification(ctx context.Context, request operations.AddNotificationRequest) (*operations.AddNotificationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/notifications"

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

	res := &operations.AddNotificationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NotificationResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NotificationResponse = out
		}
	}

	return res, nil
}

// DeleteNotificationByID - Delete a notification
// Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.
//
// **Notes:**
//
// - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
// - You can only delete notifications owned by your user account.
func (s *Notifications) DeleteNotificationByID(ctx context.Context, request operations.DeleteNotificationByIDRequest) (*operations.DeleteNotificationByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/{id}", request.PathParams)

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

	res := &operations.DeleteNotificationByIDResponse{
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

// GetNotificationByID - Get notification details
// Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification.
//
// **Notes**
//
// - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.
// - You can only retrieve notifications owned by your user account.
func (s *Notifications) GetNotificationByID(ctx context.Context, request operations.GetNotificationByIDRequest) (*operations.GetNotificationByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/{id}", request.PathParams)

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

	res := &operations.GetNotificationByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NotificationResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NotificationResponse = out
		}
	}

	return res, nil
}

// ListNotifications - Get a list of notifications
// Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.
//
// **Notes:**
//   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
func (s *Notifications) ListNotifications(ctx context.Context, request operations.ListNotificationsRequest) (*operations.ListNotificationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/notifications"

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

	res := &operations.ListNotificationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NotificationCollectionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NotificationCollectionResponse = out
		}
	}

	return res, nil
}

// UpdateNotificationByID - Update a notification
// Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger.
//
// When updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails.
//
// **Notes:**
//
// - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
// - You can only change notifications owned by your user account.
func (s *Notifications) UpdateNotificationByID(ctx context.Context, request operations.UpdateNotificationByIDRequest) (*operations.UpdateNotificationByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/notifications/{id}", request.PathParams)

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

	res := &operations.UpdateNotificationByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NotificationResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NotificationResponse = out
		}
	}

	return res, nil
}
