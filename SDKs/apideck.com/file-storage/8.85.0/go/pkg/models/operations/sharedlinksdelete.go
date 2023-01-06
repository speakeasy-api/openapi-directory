package operations

import (
	"openapi/pkg/models/shared"
)

type SharedLinksDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SharedLinksDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type SharedLinksDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type SharedLinksDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SharedLinksDeleteRequest struct {
	PathParams  SharedLinksDeletePathParams
	QueryParams SharedLinksDeleteQueryParams
	Headers     SharedLinksDeleteHeaders
	Security    SharedLinksDeleteSecurity
}

type SharedLinksDeleteResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	DeleteSharedLinkResponse *shared.DeleteSharedLinkResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
