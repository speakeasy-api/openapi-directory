package operations

import (
	"openapi/pkg/models/shared"
)

type SharedLinksAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type SharedLinksAllHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type SharedLinksAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SharedLinksAllRequest struct {
	QueryParams SharedLinksAllQueryParams
	Headers     SharedLinksAllHeaders
	Security    SharedLinksAllSecurity
}

type SharedLinksAllResponseOutput struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetSharedLinksResponse  *shared.GetSharedLinksResponseOutput
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
