package operations

import (
	"openapi/pkg/models/shared"
)

type EnableRulePathParams struct {
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleId"`
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type EnableRuleRequest struct {
	PathParams EnableRulePathParams
}

type EnableRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
