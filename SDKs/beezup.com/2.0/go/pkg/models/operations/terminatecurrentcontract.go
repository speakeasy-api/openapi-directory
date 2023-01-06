package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateCurrentContractRequest struct {
	Request shared.TerminateContract `request:"mediaType=application/json"`
}

type TerminateCurrentContractResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
