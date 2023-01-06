package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteChannelCatalogProductValueOverridePathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
	ChannelColumnID  string `pathParam:"style=simple,explode=false,name=channelColumnId"`
	ProductID        string `pathParam:"style=simple,explode=false,name=productId"`
}

type DeleteChannelCatalogProductValueOverrideRequest struct {
	PathParams DeleteChannelCatalogProductValueOverridePathParams
}

type DeleteChannelCatalogProductValueOverrideResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
