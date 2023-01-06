package operations

import (
	"openapi/pkg/models/shared"
)

type DrivesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DrivesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DrivesDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DrivesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DrivesDeleteRequest struct {
	PathParams  DrivesDeletePathParams
	QueryParams DrivesDeleteQueryParams
	Headers     DrivesDeleteHeaders
	Security    DrivesDeleteSecurity
}

type DrivesDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteDriveResponse     *shared.DeleteDriveResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
