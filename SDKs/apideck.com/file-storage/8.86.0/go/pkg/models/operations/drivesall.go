package operations

import (
	"openapi/pkg/models/shared"
)

type DrivesAllQueryParams struct {
	Cursor *string              `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.DrivesFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64               `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                `queryParam:"style=form,explode=true,name=raw"`
}

type DrivesAllHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DrivesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DrivesAllRequest struct {
	QueryParams DrivesAllQueryParams
	Headers     DrivesAllHeaders
	Security    DrivesAllSecurity
}

type DrivesAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetDrivesResponse       *shared.GetDrivesResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
