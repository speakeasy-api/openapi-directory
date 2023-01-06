package operations

import (
	"openapi/pkg/models/shared"
)

type GetPresenceOfChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetPresenceOfChannelQueryParams struct {
	ClientID     *string                    `queryParam:"style=form,explode=true,name=clientId"`
	ConnectionID *string                    `queryParam:"style=form,explode=true,name=connectionId"`
	Format       *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Limit        *int64                     `queryParam:"style=form,explode=true,name=limit"`
}

type GetPresenceOfChannelHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetPresenceOfChannelRequest struct {
	PathParams  GetPresenceOfChannelPathParams
	QueryParams GetPresenceOfChannelQueryParams
	Headers     GetPresenceOfChannelHeaders
}

type GetPresenceOfChannelResponse struct {
	Body                                  []byte
	ContentType                           string
	Error                                 *shared.Error
	Headers                               map[string][]string
	PresenceMessages                      []shared.PresenceMessage
	StatusCode                            int64
	GetPresenceOfChannel200TextHTMLString *string
}
