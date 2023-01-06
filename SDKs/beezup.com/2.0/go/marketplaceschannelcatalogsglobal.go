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

type MarketplacesChannelCatalogsGlobal struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMarketplacesChannelCatalogsGlobal(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MarketplacesChannelCatalogsGlobal {
	return &MarketplacesChannelCatalogsGlobal{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetMarketplaceChannelCatalogs - Get your marketplace channel catalog list
func (s *MarketplacesChannelCatalogsGlobal) GetMarketplaceChannelCatalogs(ctx context.Context, request operations.GetMarketplaceChannelCatalogsRequest) (*operations.GetMarketplaceChannelCatalogsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/user/marketplaces/channelcatalogs/"

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

	res := &operations.GetMarketplaceChannelCatalogsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MarketplaceChannelCatalogList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MarketplaceChannelCatalogList = out
		}
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
