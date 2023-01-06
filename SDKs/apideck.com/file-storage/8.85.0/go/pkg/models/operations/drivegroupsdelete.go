package operations

import (
	"openapi/pkg/models/shared"
)

type DriveGroupsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DriveGroupsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DriveGroupsDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DriveGroupsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DriveGroupsDeleteRequest struct {
	PathParams  DriveGroupsDeletePathParams
	QueryParams DriveGroupsDeleteQueryParams
	Headers     DriveGroupsDeleteHeaders
	Security    DriveGroupsDeleteSecurity
}

type DriveGroupsDeleteResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	DeleteDriveGroupResponse *shared.DeleteDriveGroupResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
