package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogExportationCacheInfoPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogExportationCacheInfoRequest struct {
	PathParams GetChannelCatalogExportationCacheInfoPathParams
}

type GetChannelCatalogExportationCacheInfoResponse struct {
	BeezUPCommonErrorResponseMessage      *shared.BeezUpCommonErrorResponseMessage
	ContentType                           string
	StatusCode                            int64
	ChannelCatalogExportCacheInfoResponse *shared.ChannelCatalogExportCacheInfoResponse
}
