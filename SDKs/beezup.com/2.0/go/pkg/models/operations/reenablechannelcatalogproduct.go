package operations

import (
	"openapi/pkg/models/shared"
)

type ReenableChannelCatalogProductPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
	ProductID        string `pathParam:"style=simple,explode=false,name=productId"`
}

type ReenableChannelCatalogProductRequest struct {
	PathParams ReenableChannelCatalogProductPathParams
}

type ReenableChannelCatalogProductResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
