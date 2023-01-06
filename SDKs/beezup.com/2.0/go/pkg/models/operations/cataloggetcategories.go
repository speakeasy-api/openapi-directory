package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogGetCategoriesPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogGetCategoriesHeaders struct {
	AcceptEncoding []string `header:"style=simple,explode=false,name=Accept-Encoding"`
}

type CatalogGetCategoriesRequest struct {
	PathParams CatalogGetCategoriesPathParams
	Headers    CatalogGetCategoriesHeaders
}

type CatalogGetCategoriesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	CategoryList                     *shared.CategoryList
}
