package operations

import (
	"openapi/pkg/models/shared"
)

type DisableRulePathParams struct {
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleId"`
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type DisableRuleRequest struct {
	PathParams DisableRulePathParams
}

type DisableRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
