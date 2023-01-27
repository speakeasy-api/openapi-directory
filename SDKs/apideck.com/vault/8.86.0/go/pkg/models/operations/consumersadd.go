package operations

import (
	"openapi/pkg/models/shared"
)

type ConsumersAddHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type ConsumersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConsumersAddRequest struct {
	Headers  ConsumersAddHeaders
	Request  shared.ConsumerInput `request:"mediaType=application/json"`
	Security ConsumersAddSecurity
}

type ConsumersAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateConsumerResponse  *shared.CreateConsumerResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
