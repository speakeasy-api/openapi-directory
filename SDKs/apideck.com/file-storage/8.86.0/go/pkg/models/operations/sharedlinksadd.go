package operations

import (
	"openapi/pkg/models/shared"
)

type SharedLinksAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type SharedLinksAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type SharedLinksAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SharedLinksAddRequest struct {
	QueryParams SharedLinksAddQueryParams
	Headers     SharedLinksAddHeaders
	Request     shared.SharedLinkInput `request:"mediaType=application/json"`
	Security    SharedLinksAddSecurity
}

type SharedLinksAddResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	CreateSharedLinkResponse *shared.CreateSharedLinkResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
