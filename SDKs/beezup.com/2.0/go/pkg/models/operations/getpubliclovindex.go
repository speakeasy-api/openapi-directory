package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicLovIndexHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetPublicLovIndexRequest struct {
	Headers GetPublicLovIndexHeaders
}

type GetPublicLovIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	PublicLovIndex                   *shared.PublicLovIndex
}
