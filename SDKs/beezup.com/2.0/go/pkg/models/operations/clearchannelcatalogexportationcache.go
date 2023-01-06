package operations

import (
	"openapi/pkg/models/shared"
)

type ClearChannelCatalogExportationCachePathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ClearChannelCatalogExportationCacheRequest struct {
	PathParams ClearChannelCatalogExportationCachePathParams
}

type ClearChannelCatalogExportationCacheResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
