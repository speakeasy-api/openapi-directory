package operations

import (
	"openapi/pkg/models/shared"
)

type SetChannelCatalogMarketplaceSettingsPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type SetChannelCatalogMarketplaceSettingsRequest struct {
	PathParams SetChannelCatalogMarketplaceSettingsPathParams
	Request    shared.SetChannelCatalogMarketplaceSettingsRequest `request:"mediaType=application/json"`
}

type SetChannelCatalogMarketplaceSettingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
}
