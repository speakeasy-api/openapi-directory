package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationCommitColumnsPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationCommitColumnsRequest struct {
	PathParams ImportationCommitColumnsPathParams
}

type ImportationCommitColumnsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
