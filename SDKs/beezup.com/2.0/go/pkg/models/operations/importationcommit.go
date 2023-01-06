package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationCommitPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationCommitRequest struct {
	PathParams ImportationCommitPathParams
}

type ImportationCommitResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
