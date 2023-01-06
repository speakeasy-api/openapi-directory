package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRulePathParams struct {
	RuleID  string `pathParam:"style=simple,explode=false,name=ruleId"`
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type UpdateRuleRequest struct {
	PathParams UpdateRulePathParams
	Request    shared.UpdateRuleRequest `request:"mediaType=application/json"`
}

type UpdateRuleResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
