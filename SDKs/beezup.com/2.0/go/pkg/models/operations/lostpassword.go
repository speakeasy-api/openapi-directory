package operations

import (
	"openapi/pkg/models/shared"
)

type LostPasswordRequest struct {
	Request string `request:"mediaType=application/json"`
}

type LostPasswordResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
