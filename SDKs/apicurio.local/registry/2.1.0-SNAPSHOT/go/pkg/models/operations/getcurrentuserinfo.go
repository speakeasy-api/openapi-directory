package operations

import (
	"openapi/pkg/models/shared"
)

type GetCurrentUserInfoResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	UserInfo    *shared.UserInfo
}
