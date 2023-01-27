package operations

import (
	"openapi/pkg/models/shared"
)

type FoldersCopyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FoldersCopyQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type FoldersCopyHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FoldersCopySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FoldersCopyRequest struct {
	PathParams  FoldersCopyPathParams
	QueryParams FoldersCopyQueryParams
	Headers     FoldersCopyHeaders
	Request     shared.CopyFolderRequestInput `request:"mediaType=application/json"`
	Security    FoldersCopySecurity
}

type FoldersCopyResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateFolderResponse    *shared.UpdateFolderResponse
}
