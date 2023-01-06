package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetProductBySkuPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetProductBySkuQueryParams struct {
	Sku string `queryParam:"style=form,explode=true,name=sku"`
}

type CatalogGetProductBySkuRequest struct {
	PathParams  CatalogGetProductBySkuPathParams
	QueryParams CatalogGetProductBySkuQueryParams
}

type CatalogGetProductBySkuResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	Product                          *interface{}
}
