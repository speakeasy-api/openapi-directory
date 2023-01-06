package operations

import (
	"openapi/pkg/models/shared"
)

type PublishMessagesToChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channel_id"`
}

type PublishMessagesToChannelQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type PublishMessagesToChannelHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type PublishMessagesToChannelRequestsInput struct {
	ApplicationXMsgpack []byte               `request:"mediaType=application/x-msgpack"`
	Message             *shared.MessageInput `request:"mediaType=application/json"`
	Message1            *shared.MessageInput `request:"mediaType=application/x-www-form-urlencoded"`
}

type PublishMessagesToChannel2XxApplicationJSON struct {
	Channel   *string `json:"channel,omitempty"`
	MessageID *string `json:"messageId,omitempty"`
}

type PublishMessagesToChannelRequest struct {
	PathParams  PublishMessagesToChannelPathParams
	QueryParams PublishMessagesToChannelQueryParams
	Headers     PublishMessagesToChannelHeaders
	Request     *PublishMessagesToChannelRequestsInput
}

type PublishMessagesToChannelResponse struct {
	Body                                             []byte
	ContentType                                      string
	Error                                            *shared.Error
	StatusCode                                       int64
	PublishMessagesToChannel2XXApplicationJSONObject *PublishMessagesToChannel2XxApplicationJSON
}
