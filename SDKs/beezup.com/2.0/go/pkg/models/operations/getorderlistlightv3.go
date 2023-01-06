package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderListLightV3Request struct {
	Request shared.OrderListRequest `request:"mediaType=application/json"`
}

type GetOrderListLightV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
	OrderListLightWithLinks          *shared.OrderListLightWithLinks
}
