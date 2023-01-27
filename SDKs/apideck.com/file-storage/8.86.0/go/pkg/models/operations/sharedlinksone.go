package operations

import (
	"openapi/pkg/models/shared"
)

type SharedLinksOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SharedLinksOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type SharedLinksOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type SharedLinksOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SharedLinksOneRequest struct {
	PathParams  SharedLinksOnePathParams
	QueryParams SharedLinksOneQueryParams
	Headers     SharedLinksOneHeaders
	Security    SharedLinksOneSecurity
}

type SharedLinksOneResponseOutput struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetSharedLinkResponse   *shared.GetSharedLinkResponseOutput
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
