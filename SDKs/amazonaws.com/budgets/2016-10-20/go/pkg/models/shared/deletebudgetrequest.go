package shared

// DeleteBudgetRequest
//
//	Request of DeleteBudget
type DeleteBudgetRequest struct {
	AccountID  map[string]interface{} `json:"AccountId"`
	BudgetName string                 `json:"BudgetName"`
}
