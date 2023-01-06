package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogProductInfoPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
	ProductID        string `pathParam:"style=simple,explode=false,name=productId"`
}

type GetChannelCatalogProductInfoRequest struct {
	PathParams GetChannelCatalogProductInfoPathParams
}

type GetChannelCatalogProductInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ChannelCatalogProductInfo        *shared.ChannelCatalogProductInfo
}
