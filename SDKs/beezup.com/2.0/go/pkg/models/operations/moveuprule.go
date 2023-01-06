package operations

import (
	"openapi/pkg/models/shared"
)

type MoveUpRulePathParams struct {
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleId"`
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type MoveUpRuleRequest struct {
	PathParams MoveUpRulePathParams
}

type MoveUpRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
