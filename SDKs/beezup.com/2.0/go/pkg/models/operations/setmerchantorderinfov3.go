package operations

import (
	"openapi/pkg/models/shared"
)

type SetMerchantOrderInfoV3PathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type SetMerchantOrderInfoV3QueryParams struct {
	TestMode *bool `queryParam:"style=form,explode=true,name=testMode"`
}

type SetMerchantOrderInfoV3Request struct {
	PathParams  SetMerchantOrderInfoV3PathParams
	QueryParams SetMerchantOrderInfoV3QueryParams
	Request     shared.SetMerchantOrderInfoRequest `request:"mediaType=application/json"`
}

type SetMerchantOrderInfoV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
