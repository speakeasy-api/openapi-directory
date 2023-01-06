package operations

import (
	"openapi/pkg/models/shared"
)

type GetSystemInfoResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	SystemInfo  *shared.SystemInfo
}
