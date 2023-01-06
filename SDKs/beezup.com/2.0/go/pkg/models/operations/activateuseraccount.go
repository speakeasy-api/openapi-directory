package operations

import (
	"openapi/pkg/models/shared"
)

type ActivateUserAccountRequest struct {
	Request string `request:"mediaType=application/json"`
}

type ActivateUserAccountResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
