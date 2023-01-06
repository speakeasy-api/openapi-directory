package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetCustomColumnsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetCustomColumnsRequest struct {
	PathParams CatalogGetCustomColumnsPathParams
}

type CatalogGetCustomColumnsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	CustomColumnList                 *shared.CustomColumnList
}
