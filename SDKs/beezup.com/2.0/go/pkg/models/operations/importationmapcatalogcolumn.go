package operations

import (
	"openapi/pkg/models/shared"
)

type ImportationMapCatalogColumnPathParams struct {
	ColumnID    string `pathParam:"style=simple,explode=false,name=columnId"`
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	StoreID     string `pathParam:"style=simple,explode=false,name=storeId"`
}

type ImportationMapCatalogColumnRequest struct {
	PathParams ImportationMapCatalogColumnPathParams
	Request    shared.MapBeezUpColumnRequest `request:"mediaType=application/json"`
}

type ImportationMapCatalogColumnResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
