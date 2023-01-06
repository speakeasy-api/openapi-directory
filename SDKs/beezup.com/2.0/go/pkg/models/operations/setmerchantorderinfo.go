package operations

import (
	"openapi/pkg/models/shared"
)

type SetMerchantOrderInfoPathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type SetMerchantOrderInfoRequest struct {
	PathParams SetMerchantOrderInfoPathParams
	Request    shared.SetMerchantOrderInfoRequest `request:"mediaType=application/json"`
}

type SetMerchantOrderInfoResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
