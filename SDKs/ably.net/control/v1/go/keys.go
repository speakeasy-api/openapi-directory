// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type keys struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newKeys(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *keys {
	return &keys{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// GetAppsAppIDKeys - Lists app keys
func (s *keys) GetAppsAppIDKeys(ctx context.Context, request operations.GetAppsAppIDKeysRequest, security operations.GetAppsAppIDKeysSecurity) (*operations.GetAppsAppIDKeysResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/apps/{app_id}/keys", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAppsAppIDKeysResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.KeyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.KeyResponses = out
		}
	case httpRes.StatusCode == 401:
		fallthrough
	case httpRes.StatusCode == 404:
		fallthrough
	case httpRes.StatusCode == 500:
		fallthrough
	case httpRes.StatusCode == 504:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PatchAppsAppIDKeysKeyID - Updates a key
func (s *keys) PatchAppsAppIDKeysKeyID(ctx context.Context, request operations.PatchAppsAppIDKeysKeyIDRequest, security operations.PatchAppsAppIDKeysKeyIDSecurity) (*operations.PatchAppsAppIDKeysKeyIDResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/apps/{app_id}/keys/{key_id}", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "KeyPatch", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchAppsAppIDKeysKeyIDResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.KeyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.KeyResponse = out
		}
	case httpRes.StatusCode == 400:
		fallthrough
	case httpRes.StatusCode == 401:
		fallthrough
	case httpRes.StatusCode == 404:
		fallthrough
	case httpRes.StatusCode == 422:
		fallthrough
	case httpRes.StatusCode == 500:
		fallthrough
	case httpRes.StatusCode == 504:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostAppsAppIDKeys - Creates a key
func (s *keys) PostAppsAppIDKeys(ctx context.Context, request operations.PostAppsAppIDKeysRequest, security operations.PostAppsAppIDKeysSecurity) (*operations.PostAppsAppIDKeysResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/apps/{app_id}/keys", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "KeyPost", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAppsAppIDKeysResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.KeyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.KeyResponse = out
		}
	case httpRes.StatusCode == 400:
		fallthrough
	case httpRes.StatusCode == 401:
		fallthrough
	case httpRes.StatusCode == 404:
		fallthrough
	case httpRes.StatusCode == 422:
		fallthrough
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostAppsAppIDKeysKeyIDRevoke - Revokes a key
func (s *keys) PostAppsAppIDKeysKeyIDRevoke(ctx context.Context, request operations.PostAppsAppIDKeysKeyIDRevokeRequest, security operations.PostAppsAppIDKeysKeyIDRevokeSecurity) (*operations.PostAppsAppIDKeysKeyIDRevokeResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/apps/{app_id}/keys/{key_id}/revoke", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAppsAppIDKeysKeyIDRevokeResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
		fallthrough
	case httpRes.StatusCode == 404:
		fallthrough
	case httpRes.StatusCode == 500:
		fallthrough
	case httpRes.StatusCode == 504:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
