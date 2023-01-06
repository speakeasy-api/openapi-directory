package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetCatalogColumnsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetCatalogColumnsRequest struct {
	PathParams CatalogGetCatalogColumnsPathParams
}

type CatalogGetCatalogColumnsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	CatalogColumnList                *shared.CatalogColumnList
}
