package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetProductSampleCustomColumnValuePathParams struct {
	ColumnID           string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID        string `pathParam:"style=simple,explode=false,name=executionId"`
	ProductSampleIndex int32  `pathParam:"style=simple,explode=false,name=productSampleIndex"`
	StoreID            string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetProductSampleCustomColumnValueRequest struct {
	PathParams ImportationGetProductSampleCustomColumnValuePathParams
}

type ImportationGetProductSampleCustomColumnValueResponse struct {
	BeezUPCommonErrorResponseMessage                                     *shared.BeezUpCommonErrorResponseMessage
	ContentType                                                          string
	Headers                                                              map[string][]string
	ImportationGetProductSampleCustomColumnValue200ApplicationJSONString *string
	StatusCode                                                           int64
}
