package operations

import (
	"openapi/pkg/models/shared"
)

type ReenableChannelCatalogCategoryMappingPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ReenableChannelCatalogCategoryMappingRequest struct {
	PathParams ReenableChannelCatalogCategoryMappingPathParams
}

type ReenableChannelCatalogCategoryMappingResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
