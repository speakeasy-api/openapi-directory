package operations

import (
	"openapi/pkg/models/shared"
)

type GetRulePathParams struct {
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleId"`
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type GetRuleRequest struct {
	PathParams GetRulePathParams
}

type GetRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	Rule                             *shared.Rule
}
