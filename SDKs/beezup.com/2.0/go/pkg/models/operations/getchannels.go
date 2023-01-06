package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelsPathParams struct {
	CountryIsoCode string `pathParam:"style=simple,explode=false,name=countryIsoCode"`
}

type GetChannelsHeaders struct {
	AcceptEncoding []string `header:"style=simple,explode=false,name=Accept-Encoding"`
	IfNoneMatch    *string  `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetChannelsRequest struct {
	PathParams GetChannelsPathParams
	Headers    GetChannelsHeaders
}

type GetChannelsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	PublicChannelInfoList            *shared.PublicChannelInfoList
}
