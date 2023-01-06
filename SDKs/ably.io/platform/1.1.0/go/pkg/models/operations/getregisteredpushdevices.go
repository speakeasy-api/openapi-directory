package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegisteredPushDevicesQueryParams struct {
	ClientID *string                    `queryParam:"style=form,explode=true,name=clientId"`
	DeviceID *string                    `queryParam:"style=form,explode=true,name=deviceId"`
	Format   *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Limit    *int64                     `queryParam:"style=form,explode=true,name=limit"`
}

type GetRegisteredPushDevicesHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetRegisteredPushDevicesRequest struct {
	QueryParams GetRegisteredPushDevicesQueryParams
	Headers     GetRegisteredPushDevicesHeaders
}

type GetRegisteredPushDevicesResponseOutput struct {
	Body          []byte
	ContentType   string
	DeviceDetails *shared.DeviceDetailsOutput
	Error         *shared.Error
	StatusCode    int64
}
