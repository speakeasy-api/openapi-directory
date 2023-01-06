package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type FeatureFlagsAndSettings struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFeatureFlagsAndSettings(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *FeatureFlagsAndSettings {
	return &FeatureFlagsAndSettings{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateSetting - Create Flag
// This endpoint creates a new Feature Flag or Setting in a specified Config
// identified by the `configId` parameter.
//
// **Important:** The `key` attribute must be unique within the given Config.
func (s *FeatureFlagsAndSettings) CreateSetting(ctx context.Context, request operations.CreateSettingRequest) (*operations.CreateSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}/settings", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteSetting - Delete Flag
// This endpoint removes a Feature Flag or Setting from a specified Config,
// identified by the `configId` parameter.
func (s *FeatureFlagsAndSettings) DeleteSetting(ctx context.Context, request operations.DeleteSettingRequest) (*operations.DeleteSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSetting - Get Flag
// This endpoint returns the metadata attributes of a Feature Flag or Setting
// identified by the `settingId` parameter.
func (s *FeatureFlagsAndSettings) GetSetting(ctx context.Context, request operations.GetSettingRequest) (*operations.GetSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSettings - List Flags
// This endpoint returns the list of the Feature Flags and Settings defined in a
// specified Config, identified by the `configId` parameter.
func (s *FeatureFlagsAndSettings) GetSettings(ctx context.Context, request operations.GetSettingsRequest) (*operations.GetSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}/settings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateSetting - Update Flag
// This endpoint updates the metadata of a Feature Flag or Setting
// with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
//
// Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
// The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
//
// The advantage of using JSON Patch is that you can describe individual update operations on a resource
// without touching attributes that you don't want to change.
//
// For example: We have the following resource.
// ```
//
//	{
//		"settingId": 5345,
//		"key": "myGrandFeature",
//		"name": "Tihs is a naem with soem typos.",
//		"hint": "This flag controls my grandioso feature.",
//		"settingType": "boolean",
//		"tags": [
//			{
//				"tagId": 0,
//				"name": "sample tag",
//				"color": "whale"
//			}
//		]
//	}
//
// ```
// If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
// ```
// [
//
//	{
//		"op": "replace",
//		"path": "/name",
//		"value": "This is the name without typos."
//	},
//	{
//		"op": "add",
//		"path": "/tags/-",
//		"value": 2
//	}
//
// ]
// ```
// Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
// So we get a response like this:
// ```
//
//	{
//		"settingId": 5345,
//		"key": "myGrandFeature",
//		"name": "This is the name without typos.",
//		"hint": "This flag controls my grandioso feature.",
//		"settingType": "boolean",
//		"tags": [
//			{
//				"tagId": 0,
//				"name": "sample tag",
//				"color": "whale"
//			},
//			{
//				"tagId": 2,
//				"name": "another tag",
//				"color": "koala"
//			}
//		]
//	}
//
// ```
func (s *FeatureFlagsAndSettings) UpdateSetting(ctx context.Context, request operations.UpdateSettingRequest) (*operations.UpdateSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}
