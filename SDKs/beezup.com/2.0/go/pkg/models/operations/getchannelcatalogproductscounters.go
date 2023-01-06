package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogProductsCountersPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogProductsCountersRequest struct {
	PathParams GetChannelCatalogProductsCountersPathParams
}

type GetChannelCatalogProductsCountersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ChannelCatalogProductsCounters   *shared.ChannelCatalogProductsCounters
}
