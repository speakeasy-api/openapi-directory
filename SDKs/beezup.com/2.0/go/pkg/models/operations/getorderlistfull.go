package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderListFullHeaders struct {
	AcceptEncoding []string `header:"style=simple,explode=false,name=Accept-Encoding"`
}

type GetOrderListFullRequest struct {
	Headers GetOrderListFullHeaders
	Request shared.OrderListRequest `request:"mediaType=application/json"`
}

type GetOrderListFullResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	OrderListFull                    *shared.OrderListFull
}
