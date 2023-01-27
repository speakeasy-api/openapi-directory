package operations

import (
	"openapi/pkg/models/shared"
)

type UploadSessionsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UploadSessionsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type UploadSessionsDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type UploadSessionsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UploadSessionsDeleteRequest struct {
	PathParams  UploadSessionsDeletePathParams
	QueryParams UploadSessionsDeleteQueryParams
	Headers     UploadSessionsDeleteHeaders
	Security    UploadSessionsDeleteSecurity
}

type UploadSessionsDeleteResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	DeleteUploadSessionResponse *shared.DeleteUploadSessionResponse
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
}
