package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationCancelPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationCancelRequest struct {
	PathParams ImportationCancelPathParams
}

type ImportationCancelResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
