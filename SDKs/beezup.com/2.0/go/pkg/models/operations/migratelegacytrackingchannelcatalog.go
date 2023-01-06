package operations

import (
	"openapi/pkg/models/shared"
)

type MigrateLegacyTrackingChannelCatalogPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type MigrateLegacyTrackingChannelCatalogRequest struct {
	PathParams MigrateLegacyTrackingChannelCatalogPathParams
}

type MigrateLegacyTrackingChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
