package operations

import (
	"openapi/pkg/models/shared"
)

type GetPushDeviceDetailsPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=device_id"`
}

type GetPushDeviceDetailsQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetPushDeviceDetailsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetPushDeviceDetailsRequest struct {
	PathParams  GetPushDeviceDetailsPathParams
	QueryParams GetPushDeviceDetailsQueryParams
	Headers     GetPushDeviceDetailsHeaders
}

type GetPushDeviceDetailsResponseOutput struct {
	Body          []byte
	ContentType   string
	DeviceDetails *shared.DeviceDetailsOutput
	Error         *shared.Error
	StatusCode    int64
}
