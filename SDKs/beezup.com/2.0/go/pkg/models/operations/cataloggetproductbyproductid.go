package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetProductByProductIDPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
	StoreID   string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetProductByProductIDRequest struct {
	PathParams CatalogGetProductByProductIDPathParams
}

type CatalogGetProductByProductIDResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	Product                          *interface{}
}
