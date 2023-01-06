package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderChangeReportingV3PathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
	OrderChangeExecutionUUID string `pathParam:"style=simple,explode=false,name=orderChangeExecutionUUID"`
}

type GetOrderChangeReportingV3Request struct {
	PathParams GetOrderChangeReportingV3PathParams
}

type GetOrderChangeReportingV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ChangeOrderReporting             *shared.ChangeOrderReporting
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
