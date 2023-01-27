package operations

import (
	"openapi/pkg/models/shared"
)

type DriveGroupsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DriveGroupsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DriveGroupsOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DriveGroupsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DriveGroupsOneRequest struct {
	PathParams  DriveGroupsOnePathParams
	QueryParams DriveGroupsOneQueryParams
	Headers     DriveGroupsOneHeaders
	Security    DriveGroupsOneSecurity
}

type DriveGroupsOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetDriveGroupResponse   *shared.GetDriveGroupResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
