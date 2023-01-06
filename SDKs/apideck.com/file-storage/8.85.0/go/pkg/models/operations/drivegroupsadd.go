package operations

import (
	"openapi/pkg/models/shared"
)

type DriveGroupsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DriveGroupsAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DriveGroupsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DriveGroupsAddRequest struct {
	QueryParams DriveGroupsAddQueryParams
	Headers     DriveGroupsAddHeaders
	Request     shared.DriveGroupInput `request:"mediaType=application/json"`
	Security    DriveGroupsAddSecurity
}

type DriveGroupsAddResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	CreateDriveGroupResponse *shared.CreateDriveGroupResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
