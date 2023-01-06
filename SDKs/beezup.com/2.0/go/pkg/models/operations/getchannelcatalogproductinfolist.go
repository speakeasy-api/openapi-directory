package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogProductInfoListPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogProductInfoListRequest struct {
	PathParams GetChannelCatalogProductInfoListPathParams
	Request    shared.GetChannelCatalogProductInfoListRequest `request:"mediaType=application/json"`
}

type GetChannelCatalogProductInfoListResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ChannelCatalogProductInfoList    *shared.ChannelCatalogProductInfoList
}
