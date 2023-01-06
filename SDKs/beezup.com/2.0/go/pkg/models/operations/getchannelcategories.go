package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCategoriesPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type GetChannelCategoriesHeaders struct {
	AcceptEncoding []string `header:"style=simple,explode=false,name=Accept-Encoding"`
}

type GetChannelCategoriesRequest struct {
	PathParams GetChannelCategoriesPathParams
	Headers    GetChannelCategoriesHeaders
}

type GetChannelCategoriesResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	ChannelRootCategory *shared.ChannelRootCategory
}
