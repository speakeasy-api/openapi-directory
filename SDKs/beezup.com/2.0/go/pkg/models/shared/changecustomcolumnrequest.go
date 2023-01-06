package shared

// ChangeCustomColumnRequest
// The message request to change a custom column expression an user name
type ChangeCustomColumnRequest struct {
	EncryptedBlocklyExpression string `json:"encryptedBlocklyExpression"`
	EncryptedExpression        string `json:"encryptedExpression"`
	UserColumName              string `json:"userColumName"`
}
