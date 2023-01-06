package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderHistoryPathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type GetOrderHistoryHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetOrderHistoryRequest struct {
	PathParams GetOrderHistoryPathParams
	Headers    GetOrderHistoryHeaders
}

type GetOrderHistoryResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	OrderHistory                     *shared.OrderHistory
}
