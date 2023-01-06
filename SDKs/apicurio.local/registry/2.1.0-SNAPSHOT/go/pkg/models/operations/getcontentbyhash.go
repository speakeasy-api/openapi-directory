package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentByHashPathParams struct {
	ContentHash string `pathParam:"style=simple,explode=false,name=contentHash"`
}

type GetContentByHashRequest struct {
	PathParams GetContentByHashPathParams
}

type GetContentByHashResponse struct {
	ContentType string
	Error       *shared.Error
	FileContent []byte
	StatusCode  int64
}
