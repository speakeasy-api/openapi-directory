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

type Authentication struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAuthentication(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Authentication {
	return &Authentication{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSubUserKeysGetSubUserKeysGet - Get all Sub User Keys associated with your account.
// Get a list of your issued SubUser API Keys. Includes active and revoked keys.
func (s *Authentication) GetSubUserKeysGetSubUserKeysGet(ctx context.Context, request operations.GetSubUserKeysGetSubUserKeysGetRequest) (*operations.GetSubUserKeysGetSubUserKeysGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getSubUserKeys"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSubUserKeysGetSubUserKeysGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// MakeSubUserKeyMakeSubUserKeyPost - Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
// This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.
// This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls.
// The "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow
// all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
// All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate
// higher than once per second.
func (s *Authentication) MakeSubUserKeyMakeSubUserKeyPost(ctx context.Context, request operations.MakeSubUserKeyMakeSubUserKeyPostRequest) (*operations.MakeSubUserKeyMakeSubUserKeyPostResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/makeSubUserKey"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MakeSubUserKeyMakeSubUserKeyPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SubUserJSONWebToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SubUserJSONWebToken = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// MakeTokenGetTokenGet - Get a JWT from your API credentials
// This is the first function you should call.
//
// If you are accessing our API through a third party provider they will handle authenticating to our API for you
// and you will not need call this function or retrieve a JSON Web Token.
//
// All other functions require the JSON Web Token (JWT) from this function to
// be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
// are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
// API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
// to get a new token.
func (s *Authentication) MakeTokenGetTokenGet(ctx context.Context, request operations.MakeTokenGetTokenGetRequest) (*operations.MakeTokenGetTokenGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getToken"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MakeTokenGetTokenGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JSONWebToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JSONWebToken = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// MakeTokenGetTokenPost - Get a JWT from your API credentials
// This is the first function you should call.
//
// If you are accessing our API through a third party provider they will handle authenticating to our API for you
// and you will not need call this function or retrieve a JSON Web Token.
//
// All other functions require the JSON Web Token (JWT) from this function to
// be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
// are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
// API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
// to get a new token.
func (s *Authentication) MakeTokenGetTokenPost(ctx context.Context, request operations.MakeTokenGetTokenPostRequest) (*operations.MakeTokenGetTokenPostResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getToken"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MakeTokenGetTokenPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JSONWebToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JSONWebToken = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// RevokeSubUserKeyRevokeSubUserKeyPut - Revoke a Sub User Key associated with your account.
// Revoke a SubUser API Key with the given UUID. This action can not be undone.
func (s *Authentication) RevokeSubUserKeyRevokeSubUserKeyPut(ctx context.Context, request operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest) (*operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/revokeSubUserKey"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}
