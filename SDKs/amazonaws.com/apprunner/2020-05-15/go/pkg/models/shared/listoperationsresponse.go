package shared

type ListOperationsResponse struct {
	NextToken            map[string]interface{} `json:"NextToken,omitempty"`
	OperationSummaryList []OperationSummary     `json:"OperationSummaryList,omitempty"`
}
