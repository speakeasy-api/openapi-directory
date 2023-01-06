package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentByGlobalIDPathParams struct {
	GlobalID int64 `pathParam:"style=simple,explode=false,name=globalId"`
}

type GetContentByGlobalIDRequest struct {
	PathParams GetContentByGlobalIDPathParams
}

type GetContentByGlobalIDResponse struct {
	ContentType string
	Error       *shared.Error
	FileContent []byte
	StatusCode  int64
}
