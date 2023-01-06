package operations

import (
	"openapi/pkg/models/shared"
)

type DisableChannelCatalogCategoryMappingPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type DisableChannelCatalogCategoryMappingRequest struct {
	PathParams DisableChannelCatalogCategoryMappingPathParams
}

type DisableChannelCatalogCategoryMappingResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
