package operations

import (
	"openapi/pkg/models/shared"
)

type OverrideChannelCatalogProductValuesPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
	ProductID        string `pathParam:"style=simple,explode=false,name=productId"`
}

type OverrideChannelCatalogProductValuesRequest struct {
	PathParams OverrideChannelCatalogProductValuesPathParams
	Request    map[string]string `request:"mediaType=application/json"`
}

type OverrideChannelCatalogProductValuesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
