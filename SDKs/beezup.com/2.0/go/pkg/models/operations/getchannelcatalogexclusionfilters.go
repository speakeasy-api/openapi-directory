package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogExclusionFiltersPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogExclusionFiltersRequest struct {
	PathParams GetChannelCatalogExclusionFiltersPathParams
}

type GetChannelCatalogExclusionFiltersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ExclusionFiltersResponse         *shared.ExclusionFiltersResponse
}
