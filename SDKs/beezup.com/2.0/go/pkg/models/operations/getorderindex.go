package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderIndexHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetOrderIndexRequest struct {
	Headers GetOrderIndexHeaders
}

type GetOrderIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	OrderIndex                       *shared.OrderIndex
}
