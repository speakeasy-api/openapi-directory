package operations

import (
	"openapi/pkg/models/shared"
)

type PutPushDeviceDetailsPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=device_id"`
}

type PutPushDeviceDetailsQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type PutPushDeviceDetailsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type PutPushDeviceDetailsRequestsInput struct {
	ApplicationXMsgpack []byte                     `request:"mediaType=application/x-msgpack"`
	DeviceDetails       *shared.DeviceDetailsInput `request:"mediaType=application/json"`
	DeviceDetails1      *shared.DeviceDetailsInput `request:"mediaType=application/x-www-form-urlencoded"`
}

type PutPushDeviceDetailsRequest struct {
	PathParams  PutPushDeviceDetailsPathParams
	QueryParams PutPushDeviceDetailsQueryParams
	Headers     PutPushDeviceDetailsHeaders
	Request     *PutPushDeviceDetailsRequestsInput
}

type PutPushDeviceDetailsResponseOutput struct {
	Body          []byte
	ContentType   string
	DeviceDetails *shared.DeviceDetailsOutput
	Error         *shared.Error
	StatusCode    int64
}
