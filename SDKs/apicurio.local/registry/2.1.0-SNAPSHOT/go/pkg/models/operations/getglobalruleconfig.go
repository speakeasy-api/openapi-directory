package operations

import (
	"openapi/pkg/models/shared"
)

type GetGlobalRuleConfigPathParams struct {
	Rule shared.RuleTypeEnum `pathParam:"style=simple,explode=false,name=rule"`
}

type GetGlobalRuleConfigRequest struct {
	PathParams GetGlobalRuleConfigPathParams
}

type GetGlobalRuleConfigResponse struct {
	ContentType string
	Error       *shared.Error
	Rule        *shared.Rule
	StatusCode  int64
}
