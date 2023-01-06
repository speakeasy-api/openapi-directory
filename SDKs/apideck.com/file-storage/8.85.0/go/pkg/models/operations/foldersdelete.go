package operations

import (
	"openapi/pkg/models/shared"
)

type FoldersDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FoldersDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type FoldersDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FoldersDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FoldersDeleteRequest struct {
	PathParams  FoldersDeletePathParams
	QueryParams FoldersDeleteQueryParams
	Headers     FoldersDeleteHeaders
	Security    FoldersDeleteSecurity
}

type FoldersDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteFolderResponse    *shared.DeleteFolderResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
