package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureChannelCatalogExclusionFiltersPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ConfigureChannelCatalogExclusionFiltersRequest struct {
	PathParams ConfigureChannelCatalogExclusionFiltersPathParams
	Request    []shared.ExclusionFilter `request:"mediaType=application/json"`
}

type ConfigureChannelCatalogExclusionFiltersResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
