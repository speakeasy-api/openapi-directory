package operations

import (
	"openapi/pkg/models/shared"
)

type OptimiseAllPathParams struct {
	ActionName shared.OptimisationActionNameGeneralParametersEnum `pathParam:"style=simple,explode=false,name=actionName"`
	StoreID    string                                             `pathParam:"style=simple,explode=false,name=storeId"`
}

type OptimiseAllRequest struct {
	PathParams OptimiseAllPathParams
	Request    shared.OptimiseAllRequest `request:"mediaType=application/json"`
}

type OptimiseAllResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
