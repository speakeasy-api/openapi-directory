package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderListLightRequest struct {
	Request shared.OrderListRequest `request:"mediaType=application/json"`
}

type GetOrderListLightResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	OrderListLight                   *shared.OrderListLight
}
