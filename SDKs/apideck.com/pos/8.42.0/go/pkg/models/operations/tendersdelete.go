package operations

import (
	"openapi/pkg/models/shared"
)

type TendersDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TendersDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TendersDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TendersDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TendersDeleteRequest struct {
	PathParams  TendersDeletePathParams
	QueryParams TendersDeleteQueryParams
	Headers     TendersDeleteHeaders
	Security    TendersDeleteSecurity
}

type TendersDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteTenderResponse    *shared.DeleteTenderResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
