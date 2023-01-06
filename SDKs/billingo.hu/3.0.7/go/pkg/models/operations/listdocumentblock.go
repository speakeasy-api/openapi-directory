package operations

import (
	"openapi/pkg/models/shared"
)

type ListDocumentBlockQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDocumentBlockRequest struct {
	QueryParams ListDocumentBlockQueryParams
}

type ListDocumentBlockResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	DocumentBlockList       *shared.DocumentBlockList
	Headers                 map[string][]string
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
