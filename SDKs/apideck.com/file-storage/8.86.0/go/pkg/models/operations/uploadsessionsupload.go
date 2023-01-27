package operations

import (
	"openapi/pkg/models/shared"
)

var UploadSessionsUploadServerList = []string{
	"https://upload.apideck.com",
}

type UploadSessionsUploadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UploadSessionsUploadQueryParams struct {
	PartNumber float64 `queryParam:"style=form,explode=true,name=part_number"`
	Raw        *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type UploadSessionsUploadHeaders struct {
	Digest             *string `header:"style=simple,explode=false,name=digest"`
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type UploadSessionsUploadSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UploadSessionsUploadRequest struct {
	ServerURL   *string
	PathParams  UploadSessionsUploadPathParams
	QueryParams UploadSessionsUploadQueryParams
	Headers     UploadSessionsUploadHeaders
	Request     []byte `request:"mediaType=*/*"`
	Security    UploadSessionsUploadSecurity
}

type UploadSessionsUploadResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
	UpdateUploadSessionResponse *shared.UpdateUploadSessionResponse
}
