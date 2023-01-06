package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogProductValueOverrideCopyPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
	ProductID        string `pathParam:"style=simple,explode=false,name=productId"`
}

type GetChannelCatalogProductValueOverrideCopyRequest struct {
	PathParams GetChannelCatalogProductValueOverrideCopyPathParams
}

type GetChannelCatalogProductValueOverrideCopyResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
