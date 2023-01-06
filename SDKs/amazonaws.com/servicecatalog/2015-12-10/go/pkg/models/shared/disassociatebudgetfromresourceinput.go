package shared

type DisassociateBudgetFromResourceInput struct {
	BudgetName map[string]interface{} `json:"BudgetName"`
	ResourceID string                 `json:"ResourceId"`
}
