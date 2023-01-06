package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetProductSamplePathParams struct {
	ExecutionID        string `pathParam:"style=simple,explode=false,name=executionId"`
	ProductSampleIndex int32  `pathParam:"style=simple,explode=false,name=productSampleIndex"`
	StoreID            string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetProductSampleRequest struct {
	PathParams ImportationGetProductSamplePathParams
}

type ImportationGetProductSampleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ProductSample                    *shared.ProductSample
}
