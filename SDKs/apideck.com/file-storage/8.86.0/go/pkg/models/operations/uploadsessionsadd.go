package operations

import (
	"openapi/pkg/models/shared"
)

var UploadSessionsAddServerList = []string{
	"https://upload.apideck.com",
}

type UploadSessionsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type UploadSessionsAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type UploadSessionsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UploadSessionsAddRequest struct {
	ServerURL   *string
	QueryParams UploadSessionsAddQueryParams
	Headers     UploadSessionsAddHeaders
	Request     shared.CreateUploadSessionRequest `request:"mediaType=application/json"`
	Security    UploadSessionsAddSecurity
}

type UploadSessionsAddResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	CreateUploadSessionResponse *shared.CreateUploadSessionResponse
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
}
