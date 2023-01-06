package operations

import (
	"openapi/pkg/models/shared"
)

type UnregisterPushDevicePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=device_id"`
}

type UnregisterPushDeviceQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type UnregisterPushDeviceHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type UnregisterPushDeviceRequest struct {
	PathParams  UnregisterPushDevicePathParams
	QueryParams UnregisterPushDeviceQueryParams
	Headers     UnregisterPushDeviceHeaders
}

type UnregisterPushDeviceResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
