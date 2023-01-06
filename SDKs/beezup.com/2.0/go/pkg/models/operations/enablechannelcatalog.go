package operations

import (
	"openapi/pkg/models/shared"
)

type EnableChannelCatalogPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type EnableChannelCatalogRequest struct {
	PathParams EnableChannelCatalogPathParams
}

type EnableChannelCatalogResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	UpgradeOfferRequired             *shared.UpgradeOfferRequired
}
