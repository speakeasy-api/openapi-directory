package shared

// CreateCustomColumnRequest
// The request message to create a custom column
type CreateCustomColumnRequest struct {
	DisplayGroupName           string `json:"displayGroupName"`
	EncryptedBlocklyExpression string `json:"encryptedBlocklyExpression"`
	EncryptedExpression        string `json:"encryptedExpression"`
	UserColumnName             string `json:"userColumnName"`
}
