package operations

import (
	"openapi/pkg/models/shared"
)

type ImportDataRequest struct {
	Request []byte `request:"mediaType=application/zip"`
}

type ImportDataResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
