package operations

import (
	"openapi/pkg/models/shared"
)

type ConsumersUpdatePathParams struct {
	ConsumerID string `pathParam:"style=simple,explode=false,name=consumer_id"`
}

type ConsumersUpdateHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type ConsumersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConsumersUpdateRequest struct {
	PathParams ConsumersUpdatePathParams
	Headers    ConsumersUpdateHeaders
	Request    shared.UpdateConsumerRequest `request:"mediaType=application/json"`
	Security   ConsumersUpdateSecurity
}

type ConsumersUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateConsumerResponse  *shared.UpdateConsumerResponse
}
