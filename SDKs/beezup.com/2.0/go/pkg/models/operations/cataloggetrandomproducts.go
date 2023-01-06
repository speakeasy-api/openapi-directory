package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetRandomProductsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetRandomProductsRequest struct {
	PathParams CatalogGetRandomProductsPathParams
}

type CatalogGetRandomProductsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	RandomProductList                *shared.RandomProductList
}
