package operations

import (
	"openapi/pkg/models/shared"
)

type FoldersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type FoldersAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FoldersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FoldersAddRequest struct {
	QueryParams FoldersAddQueryParams
	Headers     FoldersAddHeaders
	Request     shared.CreateFolderRequestInput `request:"mediaType=application/json"`
	Security    FoldersAddSecurity
}

type FoldersAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateFolderResponse    *shared.CreateFolderResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
