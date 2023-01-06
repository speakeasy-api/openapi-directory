package shared

// ChangeCustomColumnExpressionRequest
// The request message to change the custom column expression
type ChangeCustomColumnExpressionRequest struct {
	EncryptedBlocklyExpression string `json:"encryptedBlocklyExpression"`
	EncryptedExpression        string `json:"encryptedExpression"`
}
