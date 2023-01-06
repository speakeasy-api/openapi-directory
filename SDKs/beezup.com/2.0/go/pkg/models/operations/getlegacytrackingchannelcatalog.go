package operations

import (
	"openapi/pkg/models/shared"
)

type GetLegacyTrackingChannelCatalogPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetLegacyTrackingChannelCatalogRequest struct {
	PathParams GetLegacyTrackingChannelCatalogPathParams
}

type GetLegacyTrackingChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	LegacyTrackingChannelCatalog     *shared.LegacyTrackingChannelCatalog
}
