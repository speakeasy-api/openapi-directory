package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGlobalRuleConfigPathParams struct {
	Rule shared.RuleTypeEnum `pathParam:"style=simple,explode=false,name=rule"`
}

type UpdateGlobalRuleConfigRequest struct {
	PathParams UpdateGlobalRuleConfigPathParams
	Request    shared.Rule `request:"mediaType=application/json"`
}

type UpdateGlobalRuleConfigResponse struct {
	ContentType string
	Error       *shared.Error
	Rule        *shared.Rule
	StatusCode  int64
}
