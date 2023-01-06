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

type AssetChanges struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAssetChanges(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AssetChanges {
	return &AssetChanges{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteV3AssetChangesChangeSetsChangeSetID - Confirm asset change notifications.
// # Delete Asset Changes
//
// Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
//
// ##  Quickstart
//
// You'll need an API key and an access token to use this resource.
func (s *AssetChanges) DeleteV3AssetChangesChangeSetsChangeSetID(ctx context.Context, request operations.DeleteV3AssetChangesChangeSetsChangeSetIDRequest) (*operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/asset-changes/change-sets/{change-set-id}", request.PathParams)

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

	res := &operations.DeleteV3AssetChangesChangeSetsChangeSetIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetV3AssetChangesChannels - Get a list of asset change notification channels.
// # Get Partner Channels
//
// Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
//
// ##  Quickstart
//
// You'll need an API key and an access token to use this resource.
//
// Partners who have a channel that has been removed should contact their sales representative to be set up again.
func (s *AssetChanges) GetV3AssetChangesChannels(ctx context.Context) (*operations.GetV3AssetChangesChannelsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/asset-changes/channels"

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

	res := &operations.GetV3AssetChangesChannelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Channel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Channels = out
		}
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PutV3AssetChangesChangeSets - Get asset change notifications.
// # Asset Changes
//
// Get notifications about new, updated or deleted assets.
//
// ##  Quickstart
//
// You'll need an API key and an access token to use this resource.
//
// Notifications older than 60 days will be removed from partner channels.
func (s *AssetChanges) PutV3AssetChangesChangeSets(ctx context.Context, request operations.PutV3AssetChangesChangeSetsRequest) (*operations.PutV3AssetChangesChangeSetsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/asset-changes/change-sets"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutV3AssetChangesChangeSetsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetChanges
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetChanges = out
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AssetChanges
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AssetChanges = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
