package operations

import (
	"openapi/pkg/models/shared"
)

type GetPresenceHistoryOfChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetPresenceHistoryOfChannelQueryParams struct {
	Direction *shared.FilterDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	End       *string                     `queryParam:"style=form,explode=true,name=end"`
	Format    *shared.ResponseFormatEnum  `queryParam:"style=form,explode=true,name=format"`
	Limit     *int64                      `queryParam:"style=form,explode=true,name=limit"`
	Start     *string                     `queryParam:"style=form,explode=true,name=start"`
}

type GetPresenceHistoryOfChannelHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetPresenceHistoryOfChannelRequest struct {
	PathParams  GetPresenceHistoryOfChannelPathParams
	QueryParams GetPresenceHistoryOfChannelQueryParams
	Headers     GetPresenceHistoryOfChannelHeaders
}

type GetPresenceHistoryOfChannelResponse struct {
	Body                                         []byte
	ContentType                                  string
	Error                                        *shared.Error
	Headers                                      map[string][]string
	PresenceMessages                             []shared.PresenceMessage
	StatusCode                                   int64
	GetPresenceHistoryOfChannel2XXTextHTMLString *string
}
