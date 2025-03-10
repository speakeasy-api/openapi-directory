package operations

import (
	"openapi/pkg/models/shared"
)

type UsersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UsersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type UsersUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type UsersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UsersUpdateRequest struct {
	PathParams  UsersUpdatePathParams
	QueryParams UsersUpdateQueryParams
	Headers     UsersUpdateHeaders
	Request     interface{} `request:"mediaType=application/json"`
	Security    UsersUpdateSecurity
}

type UsersUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateUserResponse      *shared.UpdateUserResponse
}
