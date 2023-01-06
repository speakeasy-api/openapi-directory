package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogChangeCustomColumnExpressionPathParams struct {
	ColumnID string `pathParam:"style=simple,explode=false,name=columnId"`
	StoreID  string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogChangeCustomColumnExpressionRequest struct {
	PathParams CatalogChangeCustomColumnExpressionPathParams
	Request    shared.ChangeCustomColumnExpressionRequest `request:"mediaType=application/json"`
}

type CatalogChangeCustomColumnExpressionResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ImportAlreadyInProgressResponse  *shared.ImportAlreadyInProgressResponse
}
