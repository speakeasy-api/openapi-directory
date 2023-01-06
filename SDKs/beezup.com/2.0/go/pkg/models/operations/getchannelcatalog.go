package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogRequest struct {
	PathParams GetChannelCatalogPathParams
}

type GetChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ChannelCatalog                   *shared.ChannelCatalog1
}
