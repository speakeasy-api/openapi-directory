package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRulePathParams struct {
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleId"`
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type DeleteRuleRequest struct {
	PathParams DeleteRulePathParams
}

type DeleteRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
