package shared

// OrderOperationResponse
// The response given by the batch operation for an order
type OrderOperationResponse struct {
	Errors  []BeezUpCommonUserErrorMessage `json:"errors,omitempty"`
	Order   OrderIdentifier                `json:"order"`
	Status  int64                          `json:"status"`
	Success bool                           `json:"success"`
}
