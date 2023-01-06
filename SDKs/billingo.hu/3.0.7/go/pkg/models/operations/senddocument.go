package operations

import (
	"openapi/pkg/models/shared"
)

type SendDocumentPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SendDocumentRequest struct {
	PathParams SendDocumentPathParams
	Request    *shared.SendDocument `request:"mediaType=application/json"`
}

type SendDocumentResponse struct {
	ClientErrorResponse     *shared.ClientErrorResponse
	ContentType             string
	Headers                 map[string][]string
	SendDocument            *shared.SendDocument
	ServerErrorResponse     *shared.ServerErrorResponse
	StatusCode              int64
	ValidationErrorResponse *shared.ValidationErrorResponse
}
