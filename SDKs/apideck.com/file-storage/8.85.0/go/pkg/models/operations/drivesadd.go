package operations

import (
	"openapi/pkg/models/shared"
)

type DrivesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DrivesAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DrivesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DrivesAddRequest struct {
	QueryParams DrivesAddQueryParams
	Headers     DrivesAddHeaders
	Request     shared.DriveInput `request:"mediaType=application/json"`
	Security    DrivesAddSecurity
}

type DrivesAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateDriveResponse     *shared.CreateDriveResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
