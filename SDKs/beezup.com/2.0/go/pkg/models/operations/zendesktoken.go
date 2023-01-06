package operations

import (
	"openapi/pkg/models/shared"
)

type ZendeskTokenResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ZendeskToken                     *shared.ZendeskToken
}
