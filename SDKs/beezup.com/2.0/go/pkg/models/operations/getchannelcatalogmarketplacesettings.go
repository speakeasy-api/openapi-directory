package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogMarketplaceSettingsPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogMarketplaceSettingsRequest struct {
	PathParams GetChannelCatalogMarketplaceSettingsPathParams
}

type GetChannelCatalogMarketplaceSettingsResponse struct {
	BeezUPCommonErrorResponseMessage  *shared.BeezUpCommonErrorResponseMessage
	ContentType                       string
	Headers                           map[string][]string
	StatusCode                        int64
	ChannelCatalogMarketplaceSettings *shared.ChannelCatalogMarketplaceSettings
}
