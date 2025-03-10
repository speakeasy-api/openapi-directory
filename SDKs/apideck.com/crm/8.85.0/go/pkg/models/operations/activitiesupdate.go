package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ActivitiesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ActivitiesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ActivitiesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ActivitiesUpdateRequest struct {
	PathParams  ActivitiesUpdatePathParams
	QueryParams ActivitiesUpdateQueryParams
	Headers     ActivitiesUpdateHeaders
	Request     shared.ActivityInput `request:"mediaType=application/json"`
	Security    ActivitiesUpdateSecurity
}

type ActivitiesUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateActivityResponse  *shared.UpdateActivityResponse
}
