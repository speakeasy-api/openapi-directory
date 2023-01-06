package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogCategoriesPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogCategoriesRequest struct {
	PathParams GetChannelCatalogCategoriesPathParams
}

type GetChannelCatalogCategoriesResponse struct {
	BeezUPCommonErrorResponseMessage        *shared.BeezUpCommonErrorResponseMessage
	ContentType                             string
	StatusCode                              int64
	ChannelCatalogCategoryConfigurationList *shared.ChannelCatalogCategoryConfigurationList
}
