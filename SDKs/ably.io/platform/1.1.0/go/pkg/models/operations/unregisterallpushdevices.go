package operations

import (
	"openapi/pkg/models/shared"
)

type UnregisterAllPushDevicesQueryParams struct {
	ClientID *string                    `queryParam:"style=form,explode=true,name=clientId"`
	DeviceID *string                    `queryParam:"style=form,explode=true,name=deviceId"`
	Format   *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type UnregisterAllPushDevicesHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type UnregisterAllPushDevicesRequest struct {
	QueryParams UnregisterAllPushDevicesQueryParams
	Headers     UnregisterAllPushDevicesHeaders
}

type UnregisterAllPushDevicesResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
