package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNextContractResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
