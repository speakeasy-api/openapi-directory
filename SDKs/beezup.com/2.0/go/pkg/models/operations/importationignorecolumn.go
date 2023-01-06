package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationIgnoreColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationIgnoreColumnRequest struct {
	PathParams ImportationIgnoreColumnPathParams
}

type ImportationIgnoreColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
