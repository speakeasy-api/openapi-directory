package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderHistoryV3PathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type GetOrderHistoryV3Request struct {
	PathParams GetOrderHistoryV3PathParams
}

type GetOrderHistoryV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
	OrderHistory                     *shared.OrderHistory
}
