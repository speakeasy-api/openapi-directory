package shared

import (
	"time"
)

type RuleExecutionReporting struct {
	ActiveAffectedProductCount *int64                                    `json:"activeAffectedProductCount,omitempty"`
	AffectedChannelCount       *int64                                    `json:"affectedChannelCount,omitempty"`
	AffectedProductCount       *int64                                    `json:"affectedProductCount,omitempty"`
	CompletedUtcDate           *time.Time                                `json:"completedUtcDate,omitempty"`
	ErrorType                  *RuleExecutionReportingErrorTypeEnum      `json:"errorType,omitempty"`
	ExecutionSource            RuleExecutionReportingExecutionSourceEnum `json:"executionSource"`
	Links                      *RuleExecutionReportingLinks              `json:"links,omitempty"`
	OptimisationActionName     *OptimisationActionNameEnum               `json:"optimisationActionName,omitempty"`
	ReportURL                  *string                                   `json:"reportUrl,omitempty"`
	RuleID                     string                                    `json:"ruleId"`
	RuleName                   string                                    `json:"ruleName"`
	StartedUtcDate             *time.Time                                `json:"startedUtcDate,omitempty"`
	Status                     RuleExecutionReportingStatusEnum          `json:"status"`
	UserID                     *string                                   `json:"userId,omitempty"`
}
