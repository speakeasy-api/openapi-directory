package operations

import (
	"openapi/pkg/models/shared"
)

type ExportDataResponse struct {
	ContentType string
	Error       *shared.Error
	FileContent []byte
	StatusCode  int64
}
