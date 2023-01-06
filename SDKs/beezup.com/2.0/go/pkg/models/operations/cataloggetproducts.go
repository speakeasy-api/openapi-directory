package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetProductsPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetProductsRequest struct {
	PathParams CatalogGetProductsPathParams
	Request    shared.GetProductsRequest `request:"mediaType=application/json"`
}

type CatalogGetProductsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ProductList                      *shared.ProductList
}
