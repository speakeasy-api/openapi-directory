package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationReattendColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationReattendColumnRequest struct {
	PathParams ImportationReattendColumnPathParams
}

type ImportationReattendColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
