package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterRequest struct {
	Request shared.RegisterRequest `request:"mediaType=application/json"`
}

type RegisterResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
