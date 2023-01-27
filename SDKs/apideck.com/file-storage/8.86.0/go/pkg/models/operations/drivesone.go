package operations

import (
	"openapi/pkg/models/shared"
)

type DrivesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DrivesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DrivesOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DrivesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DrivesOneRequest struct {
	PathParams  DrivesOnePathParams
	QueryParams DrivesOneQueryParams
	Headers     DrivesOneHeaders
	Security    DrivesOneSecurity
}

type DrivesOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetDriveResponse        *shared.GetDriveResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
