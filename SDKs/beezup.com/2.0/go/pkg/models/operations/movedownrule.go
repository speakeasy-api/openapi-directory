package operations

import (
	"openapi/pkg/models/shared"
)

type MoveDownRulePathParams struct {
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleId"`
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type MoveDownRuleRequest struct {
	PathParams MoveDownRulePathParams
}

type MoveDownRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
