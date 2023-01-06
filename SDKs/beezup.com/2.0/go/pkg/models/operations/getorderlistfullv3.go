package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderListFullV3Headers struct {
	AcceptEncoding string `header:"style=simple,explode=false,name=Accept-Encoding"`
}

type GetOrderListFullV3Request struct {
	Headers GetOrderListFullV3Headers
	Request shared.OrderListRequest `request:"mediaType=application/json"`
}

type GetOrderListFullV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
	OrderListFullWithLinks           *shared.OrderListFullWithLinks
}
