package shared

type RuleExecutionReportings struct {
	Executions       []RuleExecutionReporting      `json:"executions,omitempty"`
	PaginationResult *BeezUpCommonPaginationResult `json:"paginationResult,omitempty"`
}
