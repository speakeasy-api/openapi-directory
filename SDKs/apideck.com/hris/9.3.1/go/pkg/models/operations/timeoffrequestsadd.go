// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TimeOffRequestsAddSecurity struct {
	APIKey string `security:"scheme,type=apiKey,subtype=header,name=Authorization"`
}

type TimeOffRequestsAddRequest struct {
	TimeOffRequestInput shared.TimeOffRequestInput `request:"mediaType=application/json"`
	// Include raw response. Mostly used for debugging purposes
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
	// The ID of your Unify application
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// ID of the consumer which you want to get or push data from
	XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type TimeOffRequestsAddResponse struct {
	// Bad Request
	BadRequestResponse *shared.BadRequestResponse
	ContentType        string
	// TimeOffRequests
	CreateTimeOffRequestResponse *shared.CreateTimeOffRequestResponse
	// The specified resource was not found
	NotFoundResponse *shared.NotFoundResponse
	// Payment Required
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int
	RawResponse             *http.Response
	// Unauthorized
	UnauthorizedResponse *shared.UnauthorizedResponse
	// Unexpected error
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	// Unprocessable
	UnprocessableResponse *shared.UnprocessableResponse
}
