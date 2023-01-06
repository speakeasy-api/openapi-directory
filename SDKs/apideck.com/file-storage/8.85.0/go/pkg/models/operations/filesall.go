package operations

import (
	"openapi/pkg/models/shared"
)

type FilesAllQueryParams struct {
	Cursor *string             `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.FilesFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64              `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool               `queryParam:"style=form,explode=true,name=raw"`
	Sort   *shared.FilesSort   `queryParam:"style=deepObject,explode=true,name=sort"`
}

type FilesAllHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FilesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FilesAllRequest struct {
	QueryParams FilesAllQueryParams
	Headers     FilesAllHeaders
	Security    FilesAllSecurity
}

type FilesAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetFilesResponse        *shared.GetFilesResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
