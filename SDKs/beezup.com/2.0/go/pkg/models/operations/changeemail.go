package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeEmailRequest struct {
	Request shared.ChangeEmailRequest `request:"mediaType=application/json"`
}

type ChangeEmailResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
