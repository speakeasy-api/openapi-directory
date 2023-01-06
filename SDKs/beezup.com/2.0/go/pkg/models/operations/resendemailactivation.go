package operations

import (
	"openapi/pkg/models/shared"
)

type ResendEmailActivationResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
}
