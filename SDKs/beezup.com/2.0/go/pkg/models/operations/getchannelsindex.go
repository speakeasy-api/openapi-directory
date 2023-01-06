package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelsIndexHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetChannelsIndexRequest struct {
	Headers GetChannelsIndexHeaders
}

type GetChannelsIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	PublicChannelIndex               *shared.PublicChannelIndex
}
