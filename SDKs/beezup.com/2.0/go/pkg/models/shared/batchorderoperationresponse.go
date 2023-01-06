package shared

// BatchOrderOperationResponse
// The response given by the batch operation
type BatchOrderOperationResponse struct {
	Operations []OrderOperationResponse `json:"operations"`
}
