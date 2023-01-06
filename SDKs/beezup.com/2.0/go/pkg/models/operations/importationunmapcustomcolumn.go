package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationUnmapCustomColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationUnmapCustomColumnRequest struct {
	PathParams ImportationUnmapCustomColumnPathParams
}

type ImportationUnmapCustomColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
