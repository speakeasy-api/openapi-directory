package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderPathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type GetOrderHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetOrderRequest struct {
	PathParams GetOrderPathParams
	Headers    GetOrderHeaders
}

type GetOrderResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	Order                            *shared.Order
}
