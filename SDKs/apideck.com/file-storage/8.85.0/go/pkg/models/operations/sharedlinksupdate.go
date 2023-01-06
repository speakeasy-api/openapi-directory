package operations

import (
	"openapi/pkg/models/shared"
)

type SharedLinksUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SharedLinksUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type SharedLinksUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type SharedLinksUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SharedLinksUpdateRequest struct {
	PathParams  SharedLinksUpdatePathParams
	QueryParams SharedLinksUpdateQueryParams
	Headers     SharedLinksUpdateHeaders
	Request     shared.SharedLinkInput `request:"mediaType=application/json"`
	Security    SharedLinksUpdateSecurity
}

type SharedLinksUpdateResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
	UpdateSharedLinkResponse *shared.UpdateSharedLinkResponse
}
