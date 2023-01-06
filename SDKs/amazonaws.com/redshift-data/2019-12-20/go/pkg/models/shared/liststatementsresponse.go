package shared

type ListStatementsResponse struct {
	NextToken  map[string]interface{} `json:"NextToken,omitempty"`
	Statements []StatementData        `json:"Statements"`
}
