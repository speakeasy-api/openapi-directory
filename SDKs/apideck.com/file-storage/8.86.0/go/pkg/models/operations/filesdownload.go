package operations

import (
	"openapi/pkg/models/shared"
)

type FilesDownloadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FilesDownloadHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FilesDownloadSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FilesDownloadRequest struct {
	PathParams FilesDownloadPathParams
	Headers    FilesDownloadHeaders
	Security   FilesDownloadSecurity
}

type FilesDownloadResponse struct {
	BadRequestResponse                   *shared.BadRequestResponse
	ContentType                          string
	NotFoundResponse                     *shared.NotFoundResponse
	PaymentRequiredResponse              *shared.PaymentRequiredResponse
	StatusCode                           int64
	UnauthorizedResponse                 *shared.UnauthorizedResponse
	UnexpectedErrorResponse              *shared.UnexpectedErrorResponse
	UnprocessableResponse                *shared.UnprocessableResponse
	FilesDownload200WildcardBinaryString []byte
}
