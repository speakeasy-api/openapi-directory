package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomerIndexHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetCustomerIndexRequest struct {
	Headers GetCustomerIndexHeaders
}

type GetCustomerIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	CustomerIndex                    *shared.CustomerIndex
}
