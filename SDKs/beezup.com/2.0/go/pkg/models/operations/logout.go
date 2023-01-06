package operations

import (
	"openapi/pkg/models/shared"
)

type LogoutResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
