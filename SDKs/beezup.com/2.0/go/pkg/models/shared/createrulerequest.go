package shared

import (
	"time"
)

type CreateRuleRequest struct {
	EndUtcDate             *time.Time                 `json:"endUtcDate,omitempty"`
	OptimisationActionName OptimisationActionNameEnum `json:"optimisationActionName"`
	ReportFilterID         string                     `json:"reportFilterId"`
	RuleName               string                     `json:"ruleName"`
	StartUtcDate           *time.Time                 `json:"startUtcDate,omitempty"`
}
