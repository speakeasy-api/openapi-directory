package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterPushDeviceQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type RegisterPushDeviceHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type RegisterPushDeviceRequestsInput struct {
	ApplicationXMsgpack []byte                     `request:"mediaType=application/x-msgpack"`
	DeviceDetails       *shared.DeviceDetailsInput `request:"mediaType=application/json"`
}

type RegisterPushDeviceRequest struct {
	QueryParams RegisterPushDeviceQueryParams
	Headers     RegisterPushDeviceHeaders
	Request     *RegisterPushDeviceRequestsInput
}

type RegisterPushDeviceResponseOutput struct {
	Body          []byte
	ContentType   string
	DeviceDetails *shared.DeviceDetailsOutput
	Error         *shared.Error
	StatusCode    int64
}
