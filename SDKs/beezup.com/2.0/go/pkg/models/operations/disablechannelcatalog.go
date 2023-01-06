package operations

import (
	"openapi/pkg/models/shared"
)

type DisableChannelCatalogPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type DisableChannelCatalogRequest struct {
	PathParams DisableChannelCatalogPathParams
}

type DisableChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
