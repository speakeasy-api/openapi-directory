package operations

import (
	"openapi/pkg/models/shared"
)

type DriveGroupsAllQueryParams struct {
	Cursor *string                   `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.DriveGroupsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                    `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                     `queryParam:"style=form,explode=true,name=raw"`
}

type DriveGroupsAllHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DriveGroupsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DriveGroupsAllRequest struct {
	QueryParams DriveGroupsAllQueryParams
	Headers     DriveGroupsAllHeaders
	Security    DriveGroupsAllSecurity
}

type DriveGroupsAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetDriveGroupsResponse  *shared.GetDriveGroupsResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
