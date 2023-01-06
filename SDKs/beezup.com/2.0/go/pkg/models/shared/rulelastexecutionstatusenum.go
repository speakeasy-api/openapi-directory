package shared

type RuleLastExecutionStatusEnum string

const (
	RuleLastExecutionStatusEnumInProgress RuleLastExecutionStatusEnum = "InProgress"
	RuleLastExecutionStatusEnumSucceeded  RuleLastExecutionStatusEnum = "Succeeded"
	RuleLastExecutionStatusEnumFailed     RuleLastExecutionStatusEnum = "Failed"
	RuleLastExecutionStatusEnumUnknown    RuleLastExecutionStatusEnum = "Unknown"
)
