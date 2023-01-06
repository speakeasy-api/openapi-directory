package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureChannelCatalogProductValueOverrideCopyPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
	ProductID        string `pathParam:"style=simple,explode=false,name=productId"`
}

type ConfigureChannelCatalogProductValueOverrideCopyRequest struct {
	PathParams ConfigureChannelCatalogProductValueOverrideCopyPathParams
}

type ConfigureChannelCatalogProductValueOverrideCopyResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
