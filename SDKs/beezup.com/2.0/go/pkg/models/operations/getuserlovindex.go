package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserLovIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	UserLovIndex                     *shared.UserLovIndex
}
