package operations

import (
	"openapi/pkg/models/shared"
)

type ReactivateCurrentContractResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
