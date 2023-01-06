package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentByIDPathParams struct {
	ContentID int64 `pathParam:"style=simple,explode=false,name=contentId"`
}

type GetContentByIDRequest struct {
	PathParams GetContentByIDPathParams
}

type GetContentByIDResponse struct {
	ContentType string
	Error       *shared.Error
	FileContent []byte
	StatusCode  int64
}
