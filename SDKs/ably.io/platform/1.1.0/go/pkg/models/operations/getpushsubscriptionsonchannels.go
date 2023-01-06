package operations

import (
	"openapi/pkg/models/shared"
)

type GetPushSubscriptionsOnChannelsQueryParams struct {
	Channel  *string                    `queryParam:"style=form,explode=true,name=channel"`
	ClientID *string                    `queryParam:"style=form,explode=true,name=clientId"`
	DeviceID *string                    `queryParam:"style=form,explode=true,name=deviceId"`
	Format   *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Limit    *int64                     `queryParam:"style=form,explode=true,name=limit"`
}

type GetPushSubscriptionsOnChannelsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetPushSubscriptionsOnChannelsRequest struct {
	QueryParams GetPushSubscriptionsOnChannelsQueryParams
	Headers     GetPushSubscriptionsOnChannelsHeaders
}

type GetPushSubscriptionsOnChannelsResponseOutput struct {
	Body          []byte
	ContentType   string
	DeviceDetails *shared.DeviceDetailsOutput
	Error         *shared.Error
	StatusCode    int64
}
