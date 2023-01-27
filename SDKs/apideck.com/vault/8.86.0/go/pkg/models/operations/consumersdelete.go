package operations

import (
	"openapi/pkg/models/shared"
)

type ConsumersDeletePathParams struct {
	ConsumerID string `pathParam:"style=simple,explode=false,name=consumer_id"`
}

type ConsumersDeleteHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type ConsumersDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConsumersDeleteRequest struct {
	PathParams ConsumersDeletePathParams
	Headers    ConsumersDeleteHeaders
	Security   ConsumersDeleteSecurity
}

type ConsumersDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteConsumerResponse  *shared.DeleteConsumerResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
