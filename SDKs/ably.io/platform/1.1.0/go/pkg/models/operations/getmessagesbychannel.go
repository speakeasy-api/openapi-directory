package operations

import (
	"openapi/pkg/models/shared"
)

type GetMessagesByChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetMessagesByChannelQueryParams struct {
	Direction *shared.FilterDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	End       *string                     `queryParam:"style=form,explode=true,name=end"`
	Format    *shared.ResponseFormatEnum  `queryParam:"style=form,explode=true,name=format"`
	Limit     *int64                      `queryParam:"style=form,explode=true,name=limit"`
	Start     *string                     `queryParam:"style=form,explode=true,name=start"`
}

type GetMessagesByChannelHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetMessagesByChannelRequest struct {
	PathParams  GetMessagesByChannelPathParams
	QueryParams GetMessagesByChannelQueryParams
	Headers     GetMessagesByChannelHeaders
}

type GetMessagesByChannelResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	Messages                              []shared.Message
	StatusCode                            int64
	GetMessagesByChannel2XXTextHTMLString *string
}
