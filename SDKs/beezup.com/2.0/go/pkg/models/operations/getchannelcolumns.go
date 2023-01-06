package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelColumnsPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type GetChannelColumnsHeaders struct {
	AcceptEncoding []string `header:"style=simple,explode=false,name=Accept-Encoding"`
}

type GetChannelColumnsRequest struct {
	PathParams GetChannelColumnsPathParams
	Headers    GetChannelColumnsHeaders
	Request    []string `request:"mediaType=application/json"`
}

type GetChannelColumnsResponse struct {
	ContentType    string
	Headers        map[string][]string
	StatusCode     int64
	ChannelColumns []shared.ChannelColumn
}
