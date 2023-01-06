package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentRequest struct {
	Request shared.DocumentInsert `request:"mediaType=application/json"`
}

type CreateDocumentResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Document                *shared.Document
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
