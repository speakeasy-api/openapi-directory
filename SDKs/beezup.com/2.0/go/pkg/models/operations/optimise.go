package operations

import (
	"openapi/pkg/models/shared"
)

type OptimisePathParams struct {
	ActionName shared.OptimisationActionNameGeneralParametersEnum `pathParam:"style=simple,explode=false,name=actionName"`
	StoreID    string                                             `pathParam:"style=simple,explode=false,name=storeId"`
}

type OptimiseRequest struct {
	PathParams OptimisePathParams
	Request    shared.OptimiseRequest `request:"mediaType=application/json"`
}

type OptimiseResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
