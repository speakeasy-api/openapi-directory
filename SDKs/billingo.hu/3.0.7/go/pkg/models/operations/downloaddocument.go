package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadDocumentPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DownloadDocumentRequest struct {
	PathParams DownloadDocumentPathParams
}

type DownloadDocumentResponse struct {
	ClientError                                   *shared.ClientError
	ClientErrorResponse                           *shared.ClientErrorResponse
	ContentType                                   string
	DownloadDocument200ApplicationPdfBinaryString []byte
	Headers                                       map[string][]string
	ServerErrorResponse                           *shared.ServerErrorResponse
	StatusCode                                    int64
	ValidationErrorResponse                       *shared.ValidationErrorResponse
}
