package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationGetCustomColumnExpressionPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationGetCustomColumnExpressionRequest struct {
	PathParams ImportationGetCustomColumnExpressionPathParams
}

type ImportationGetCustomColumnExpressionResponse struct {
	BeezUPCommonErrorResponseMessage                             *shared.BeezUpCommonErrorResponseMessage
	ContentType                                                  string
	ImportationGetCustomColumnExpression200ApplicationJSONString *string
	StatusCode                                                   int64
}
