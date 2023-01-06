package operations

import (
	"openapi/pkg/models/shared"
)

type ClearMerchantOrderInfoV3PathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type ClearMerchantOrderInfoV3QueryParams struct {
	TestMode *bool `queryParam:"style=form,explode=true,name=testMode"`
}

type ClearMerchantOrderInfoV3Request struct {
	PathParams  ClearMerchantOrderInfoV3PathParams
	QueryParams ClearMerchantOrderInfoV3QueryParams
}

type ClearMerchantOrderInfoV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
