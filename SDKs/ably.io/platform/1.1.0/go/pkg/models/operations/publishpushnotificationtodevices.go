package operations

import (
	"openapi/pkg/models/shared"
)

type PublishPushNotificationToDevicesQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type PublishPushNotificationToDevicesHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type PublishPushNotificationToDevicesApplicationJSON struct {
	Push      *shared.Push     `json:"push,omitempty"`
	Recipient shared.Recipient `json:"recipient"`
}

type PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded struct {
	Push      *shared.Push     `form:"name=push"`
	Recipient shared.Recipient `form:"name=recipient"`
}

type PublishPushNotificationToDevicesRequests struct {
	ApplicationXMsgpack []byte                                                         `request:"mediaType=application/x-msgpack"`
	Object              *PublishPushNotificationToDevicesApplicationJSON               `request:"mediaType=application/json"`
	Object1             *PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded `request:"mediaType=application/x-www-form-urlencoded"`
}

type PublishPushNotificationToDevicesRequest struct {
	QueryParams PublishPushNotificationToDevicesQueryParams
	Headers     PublishPushNotificationToDevicesHeaders
	Request     *PublishPushNotificationToDevicesRequests
}

type PublishPushNotificationToDevicesResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
