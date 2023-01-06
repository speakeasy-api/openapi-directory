package operations

import (
	"openapi/pkg/models/shared"
)

type OptimiseByCategoryPathParams struct {
	ActionName        shared.OptimisationActionNameGeneralParametersEnum `pathParam:"style=simple,explode=false,name=actionName"`
	CatalogCategoryID string                                             `pathParam:"style=simple,explode=false,name=catalogCategoryId"`
	StoreID           string                                             `pathParam:"style=simple,explode=false,name=storeId"`
}

type OptimiseByCategoryRequest struct {
	PathParams OptimiseByCategoryPathParams
	Request    []string `request:"mediaType=application/json"`
}

type OptimiseByCategoryResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
