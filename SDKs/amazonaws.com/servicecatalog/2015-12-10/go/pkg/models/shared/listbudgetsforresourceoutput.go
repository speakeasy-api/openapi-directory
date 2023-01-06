package shared

type ListBudgetsForResourceOutput struct {
	Budgets       map[string]interface{} `json:"Budgets,omitempty"`
	NextPageToken *string                `json:"NextPageToken,omitempty"`
}
