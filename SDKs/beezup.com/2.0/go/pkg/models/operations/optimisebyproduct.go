package operations

import (
	"openapi/pkg/models/shared"
)

type OptimiseByProductPathParams struct {
	ActionName shared.OptimisationActionNameGeneralParametersEnum `pathParam:"style=simple,explode=false,name=actionName"`
	ProductID  string                                             `pathParam:"style=simple,explode=false,name=productId"`
	StoreID    string                                             `pathParam:"style=simple,explode=false,name=storeId"`
}

type OptimiseByProductRequest struct {
	PathParams OptimiseByProductPathParams
	Request    []string `request:"mediaType=application/json"`
}

type OptimiseByProductResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
