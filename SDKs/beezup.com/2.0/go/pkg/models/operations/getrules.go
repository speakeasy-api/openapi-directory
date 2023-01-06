package operations

import (
	"openapi/pkg/models/shared"
)

type GetRulesPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetRulesRequest struct {
	PathParams GetRulesPathParams
}

type GetRulesResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	RuleList                         *shared.RuleList
}
