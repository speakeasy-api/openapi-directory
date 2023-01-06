package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePushDeviceDetailsQueryParams struct {
	Channel  *string                    `queryParam:"style=form,explode=true,name=channel"`
	ClientID *string                    `queryParam:"style=form,explode=true,name=clientId"`
	DeviceID *string                    `queryParam:"style=form,explode=true,name=deviceId"`
	Format   *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type DeletePushDeviceDetailsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type DeletePushDeviceDetailsRequest struct {
	QueryParams DeletePushDeviceDetailsQueryParams
	Headers     DeletePushDeviceDetailsHeaders
}

type DeletePushDeviceDetailsResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
