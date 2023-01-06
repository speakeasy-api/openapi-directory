package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogDeleteCustomColumnPathParams struct {
	ColumnID string `pathParam:"style=simple,explode=false,name=columnId"`
	StoreID  string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogDeleteCustomColumnRequest struct {
	PathParams CatalogDeleteCustomColumnPathParams
}

type CatalogDeleteCustomColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
