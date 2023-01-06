package shared

import (
	"time"
)

type Rule struct {
	ActionName           OptimisationActionNameEnum   `json:"actionName"`
	Enabled              bool                         `json:"enabled"`
	LastExecutionStatus  *RuleLastExecutionStatusEnum `json:"lastExecutionStatus,omitempty"`
	LastExecutionUtcDate *time.Time                   `json:"lastExecutionUtcDate,omitempty"`
	Links                RuleLinks                    `json:"links"`
	Position             int64                        `json:"position"`
	ReportFilterID       string                       `json:"reportFilterId"`
	RuleID               string                       `json:"ruleId"`
	RuleName             string                       `json:"ruleName"`
	ValidityEndUtcDate   *time.Time                   `json:"validityEndUtcDate,omitempty"`
	ValidityStartUtcDate *time.Time                   `json:"validityStartUtcDate,omitempty"`
}
