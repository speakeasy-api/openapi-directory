package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePushDeviceDetailsPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=device_id"`
}

type UpdatePushDeviceDetailsQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type UpdatePushDeviceDetailsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type UpdatePushDeviceDetailsRequest struct {
	PathParams  UpdatePushDeviceDetailsPathParams
	QueryParams UpdatePushDeviceDetailsQueryParams
	Headers     UpdatePushDeviceDetailsHeaders
}

type UpdatePushDeviceDetailsResponseOutput struct {
	Body          []byte
	ContentType   string
	DeviceDetails *shared.DeviceDetailsOutput
	Error         *shared.Error
	StatusCode    int64
}
