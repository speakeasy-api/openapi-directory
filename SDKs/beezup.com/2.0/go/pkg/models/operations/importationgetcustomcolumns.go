package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetCustomColumnsPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetCustomColumnsRequest struct {
	PathParams ImportationGetCustomColumnsPathParams
}

type ImportationGetCustomColumnsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportationCustomColumnList      *shared.ImportationCustomColumnList
}
