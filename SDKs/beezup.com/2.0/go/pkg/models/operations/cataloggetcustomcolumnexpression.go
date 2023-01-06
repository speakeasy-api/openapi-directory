package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetCustomColumnExpressionPathParams struct {
	ColumnID string `pathParam:"style=simple,explode=false,name=columnId"`
	StoreID  string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetCustomColumnExpressionRequest struct {
	PathParams CatalogGetCustomColumnExpressionPathParams
}

type CatalogGetCustomColumnExpressionResponse struct {
	BeezUPCommonErrorResponseMessage                         *shared.BeezUpCommonErrorResponseMessage
	CatalogGetCustomColumnExpression200ApplicationJSONString *string
	ContentType                                              string
	StatusCode                                               int64
}
