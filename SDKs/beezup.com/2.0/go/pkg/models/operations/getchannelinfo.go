package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelInfoPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type GetChannelInfoRequest struct {
	PathParams GetChannelInfoPathParams
}

type GetChannelInfoResponse struct {
	ContentType string
	StatusCode  int64
	ChannelInfo *shared.ChannelInfo
}
