package operations

import (
	"openapi/pkg/models/shared"
)

type CancelDocumentPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CancelDocumentRequest struct {
	PathParams CancelDocumentPathParams
}

type CancelDocumentResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Document                *shared.Document
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
