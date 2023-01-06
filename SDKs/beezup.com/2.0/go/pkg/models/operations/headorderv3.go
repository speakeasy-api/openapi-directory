package operations

import (
	"openapi/pkg/models/shared"
)

type HeadOrderV3PathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	BeezUPOrderID            string `pathParam:"style=simple,explode=false,name=beezUPOrderId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type HeadOrderV3Headers struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type HeadOrderV3Request struct {
	PathParams HeadOrderV3PathParams
	Headers    HeadOrderV3Headers
}

type HeadOrderV3Response struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	ErrorResponseMessage             *shared.ErrorResponseMessage
}
