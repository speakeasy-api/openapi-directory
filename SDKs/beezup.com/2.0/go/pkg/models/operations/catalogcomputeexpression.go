package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogComputeExpressionPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogComputeExpressionRequest struct {
	PathParams CatalogComputeExpressionPathParams
	Request    shared.ComputeExpressionRequest `request:"mediaType=application/json"`
}

type CatalogComputeExpressionResponse struct {
	BeezUPCommonErrorResponseMessage                 *shared.BeezUpCommonErrorResponseMessage
	CatalogComputeExpression200ApplicationJSONString *string
	CatalogComputeExpression400ApplicationJSONString *string
	ContentType                                      string
	StatusCode                                       int64
}
