package operations

import (
	"openapi/pkg/models/shared"
)

type LoginRequest struct {
	Request shared.LoginRequest `request:"mediaType=application/json"`
}

type LoginResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	APICredentials                   *shared.APICredentials
}
