package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteChannelCatalogPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type DeleteChannelCatalogRequest struct {
	PathParams DeleteChannelCatalogPathParams
}

type DeleteChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
