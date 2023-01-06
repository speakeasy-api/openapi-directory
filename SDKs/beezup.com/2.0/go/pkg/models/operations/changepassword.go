package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePasswordRequest struct {
	Request shared.ChangePasswordRequest `request:"mediaType=application/json"`
}

type ChangePasswordResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
