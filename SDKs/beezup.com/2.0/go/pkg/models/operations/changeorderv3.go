package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeOrderV3PathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	ChangeOrderType          string `pathParam:"style=simple,explode=false,name=changeOrderType"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type ChangeOrderV3QueryParams struct {
	TestMode *bool  `queryParam:"style=form,explode=true,name=testMode"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type ChangeOrderV3Request struct {
	PathParams  ChangeOrderV3PathParams
	QueryParams ChangeOrderV3QueryParams
	Request     map[string]string `request:"mediaType=application/json"`
}

type ChangeOrderV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
