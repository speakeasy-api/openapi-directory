package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGlobalRulePathParams struct {
	Rule shared.RuleTypeEnum `pathParam:"style=simple,explode=false,name=rule"`
}

type DeleteGlobalRuleRequest struct {
	PathParams DeleteGlobalRulePathParams
}

type DeleteGlobalRuleResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
