package operations

import (
	"openapi/pkg/models/shared"
)

type GetContractsHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetContractsRequest struct {
	Headers GetContractsHeaders
}

type GetContractsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	Contracts                        *shared.Contracts
}
