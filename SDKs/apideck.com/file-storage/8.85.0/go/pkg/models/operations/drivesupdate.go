package operations

import (
	"openapi/pkg/models/shared"
)

type DrivesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DrivesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DrivesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DrivesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DrivesUpdateRequest struct {
	PathParams  DrivesUpdatePathParams
	QueryParams DrivesUpdateQueryParams
	Headers     DrivesUpdateHeaders
	Request     shared.DriveInput `request:"mediaType=application/json"`
	Security    DrivesUpdateSecurity
}

type DrivesUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateDriveResponse     *shared.UpdateDriveResponse
}
