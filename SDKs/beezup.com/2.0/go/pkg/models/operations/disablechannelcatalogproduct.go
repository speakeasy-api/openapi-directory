package operations

import (
	"openapi/pkg/models/shared"
)

type DisableChannelCatalogProductPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
	ProductID        string `pathParam:"style=simple,explode=false,name=productId"`
}

type DisableChannelCatalogProductRequest struct {
	PathParams DisableChannelCatalogProductPathParams
}

type DisableChannelCatalogProductResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
