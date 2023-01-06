package operations

import (
	"openapi/pkg/models/shared"
)

type FoldersOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FoldersOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type FoldersOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FoldersOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FoldersOneRequest struct {
	PathParams  FoldersOnePathParams
	QueryParams FoldersOneQueryParams
	Headers     FoldersOneHeaders
	Security    FoldersOneSecurity
}

type FoldersOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetFolderResponse       *shared.GetFolderResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
