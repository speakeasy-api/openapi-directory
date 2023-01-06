package operations

import (
	"openapi/pkg/models/shared"
)

type FoldersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FoldersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type FoldersUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type FoldersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FoldersUpdateRequest struct {
	PathParams  FoldersUpdatePathParams
	QueryParams FoldersUpdateQueryParams
	Headers     FoldersUpdateHeaders
	Request     shared.UpdateFolderRequestInput `request:"mediaType=application/json"`
	Security    FoldersUpdateSecurity
}

type FoldersUpdateResponse struct {
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
