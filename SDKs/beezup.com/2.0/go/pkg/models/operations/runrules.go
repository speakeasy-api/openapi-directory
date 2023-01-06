package operations

import (
	"openapi/pkg/models/shared"
)

type RunRulesPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type RunRulesRequest struct {
	PathParams RunRulesPathParams
}

type RunRulesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
