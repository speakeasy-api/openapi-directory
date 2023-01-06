package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeOrderPathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	ChangeOrderType          string `pathParam:"style=simple,explode=false,name=changeOrderType"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type ChangeOrderQueryParams struct {
	TestMode *bool  `queryParam:"style=form,explode=true,name=testMode"`
	UserName string `queryParam:"style=form,explode=true,name=userName"`
}

type ChangeOrderHeaders struct {
	IfMatch string `header:"style=simple,explode=false,name=If-Match"`
}

type ChangeOrderRequest struct {
	PathParams  ChangeOrderPathParams
	QueryParams ChangeOrderQueryParams
	Headers     ChangeOrderHeaders
	Request     map[string]string `request:"mediaType=application/json"`
}

type ChangeOrderResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
}
