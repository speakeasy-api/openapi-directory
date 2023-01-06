package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureChannelCatalogCategoryPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ConfigureChannelCatalogCategoryRequest struct {
	PathParams ConfigureChannelCatalogCategoryPathParams
	Request    shared.ConfigureCategoryRequest `request:"mediaType=application/json"`
}

type ConfigureChannelCatalogCategoryResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
