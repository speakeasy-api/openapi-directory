package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationDeleteCustomColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationDeleteCustomColumnRequest struct {
	PathParams ImportationDeleteCustomColumnPathParams
}

type ImportationDeleteCustomColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
