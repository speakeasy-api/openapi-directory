package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationUnmapCatalogColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationUnmapCatalogColumnRequest struct {
	PathParams ImportationUnmapCatalogColumnPathParams
}

type ImportationUnmapCatalogColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
