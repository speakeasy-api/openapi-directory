package operations

import (
	"openapi/pkg/models/shared"
)

type FilesSearchHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FilesSearchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FilesSearchRequest struct {
	Headers  FilesSearchHeaders
	Request  shared.FilesSearch `request:"mediaType=application/json"`
	Security FilesSearchSecurity
}

type FilesSearchResponse struct {
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
