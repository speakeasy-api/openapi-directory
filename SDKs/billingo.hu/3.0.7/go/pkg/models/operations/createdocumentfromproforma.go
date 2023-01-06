package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentFromProformaPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CreateDocumentFromProformaRequest struct {
	PathParams CreateDocumentFromProformaPathParams
}

type CreateDocumentFromProformaResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Document                *shared.Document
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
