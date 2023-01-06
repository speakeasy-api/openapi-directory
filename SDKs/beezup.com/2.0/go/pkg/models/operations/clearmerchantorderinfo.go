package operations

import (
	"openapi/pkg/models/shared"
)

type ClearMerchantOrderInfoPathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type ClearMerchantOrderInfoRequest struct {
	PathParams ClearMerchantOrderInfoPathParams
}

type ClearMerchantOrderInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
