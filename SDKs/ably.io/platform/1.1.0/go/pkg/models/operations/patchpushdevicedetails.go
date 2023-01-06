package operations

import (
	"openapi/pkg/models/shared"
)

type PatchPushDeviceDetailsPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=device_id"`
}

type PatchPushDeviceDetailsQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type PatchPushDeviceDetailsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type PatchPushDeviceDetailsRequestsInput struct {
	ApplicationXMsgpack []byte                     `request:"mediaType=application/x-msgpack"`
	DeviceDetails       *shared.DeviceDetailsInput `request:"mediaType=application/json"`
	DeviceDetails1      *shared.DeviceDetailsInput `request:"mediaType=application/x-www-form-urlencoded"`
}

type PatchPushDeviceDetailsRequest struct {
	PathParams  PatchPushDeviceDetailsPathParams
	QueryParams PatchPushDeviceDetailsQueryParams
	Headers     PatchPushDeviceDetailsHeaders
	Request     *PatchPushDeviceDetailsRequestsInput
}

type PatchPushDeviceDetailsResponseOutput struct {
	Body          []byte
	ContentType   string
	DeviceDetails *shared.DeviceDetailsOutput
	Error         *shared.Error
	StatusCode    int64
}
