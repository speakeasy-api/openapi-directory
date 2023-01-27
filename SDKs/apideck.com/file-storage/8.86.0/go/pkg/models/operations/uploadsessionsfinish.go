package operations

import (
	"openapi/pkg/models/shared"
)

var UploadSessionsFinishServerList = []string{
	"https://upload.apideck.com",
}

type UploadSessionsFinishPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UploadSessionsFinishQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type UploadSessionsFinishHeaders struct {
	Digest             *string `header:"style=simple,explode=false,name=digest"`
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type UploadSessionsFinishSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UploadSessionsFinishRequest struct {
	ServerURL   *string
	PathParams  UploadSessionsFinishPathParams
	QueryParams UploadSessionsFinishQueryParams
	Headers     UploadSessionsFinishHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    UploadSessionsFinishSecurity
}

type UploadSessionsFinishResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetFileResponse         *shared.GetFileResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
