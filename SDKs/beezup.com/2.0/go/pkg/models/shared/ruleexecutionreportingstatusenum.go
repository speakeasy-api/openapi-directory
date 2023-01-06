package shared

type RuleExecutionReportingStatusEnum string

const (
	RuleExecutionReportingStatusEnumInProgress        RuleExecutionReportingStatusEnum = "InProgress"
	RuleExecutionReportingStatusEnumSucceeded         RuleExecutionReportingStatusEnum = "Succeeded"
	RuleExecutionReportingStatusEnumAlreadyInProgress RuleExecutionReportingStatusEnum = "AlreadyInProgress"
	RuleExecutionReportingStatusEnumAborted           RuleExecutionReportingStatusEnum = "Aborted"
	RuleExecutionReportingStatusEnumFailed            RuleExecutionReportingStatusEnum = "Failed"
	RuleExecutionReportingStatusEnumUnknown           RuleExecutionReportingStatusEnum = "Unknown"
)
