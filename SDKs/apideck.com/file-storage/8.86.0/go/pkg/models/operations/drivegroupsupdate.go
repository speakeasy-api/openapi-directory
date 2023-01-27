package operations

import (
	"openapi/pkg/models/shared"
)

type DriveGroupsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DriveGroupsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DriveGroupsUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DriveGroupsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DriveGroupsUpdateRequest struct {
	PathParams  DriveGroupsUpdatePathParams
	QueryParams DriveGroupsUpdateQueryParams
	Headers     DriveGroupsUpdateHeaders
	Request     shared.DriveGroupInput `request:"mediaType=application/json"`
	Security    DriveGroupsUpdateSecurity
}

type DriveGroupsUpdateResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
	UpdateDriveGroupResponse *shared.UpdateDriveGroupResponse
}
