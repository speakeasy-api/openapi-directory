package shared

import (
	"time"
)

// UpdateRuleRequest
// This update will replace the following values.
type UpdateRuleRequest struct {
	EndUtcDate   *time.Time `json:"endUtcDate,omitempty"`
	RuleName     string     `json:"ruleName"`
	StartUtcDate *time.Time `json:"startUtcDate,omitempty"`
}
