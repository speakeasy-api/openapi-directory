package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribePushDeviceToChannelQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type SubscribePushDeviceToChannelHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type SubscribePushDeviceToChannelApplicationJSON1 struct {
	Channel  *string `json:"channel,omitempty"`
	DeviceID *string `json:"deviceId,omitempty"`
}

type SubscribePushDeviceToChannelApplicationJSON2 struct {
	Channel  *string `json:"channel,omitempty"`
	ClientID *string `json:"clientId,omitempty"`
}

type SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 struct {
	Channel  *string `form:"name=channel"`
	DeviceID *string `form:"name=deviceId"`
}

type SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 struct {
	Channel  *string `form:"name=channel"`
	ClientID *string `form:"name=clientId"`
}

type SubscribePushDeviceToChannelRequests struct {
	ApplicationXMsgpack []byte       `request:"mediaType=application/x-msgpack"`
	OneOf               *interface{} `request:"mediaType=application/json"`
	OneOf1              *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
}

type SubscribePushDeviceToChannelRequest struct {
	QueryParams SubscribePushDeviceToChannelQueryParams
	Headers     SubscribePushDeviceToChannelHeaders
	Request     *SubscribePushDeviceToChannelRequests
}

type SubscribePushDeviceToChannelResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
