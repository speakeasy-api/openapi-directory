package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetDocumentRequest struct {
	PathParams GetDocumentPathParams
}

type GetDocumentResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Document                *shared.Document
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
