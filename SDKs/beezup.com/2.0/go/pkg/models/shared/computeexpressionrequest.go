package shared

// ComputeExpressionRequest
// The request message to compute an expression based on the provided product values
type ComputeExpressionRequest struct {
	EncryptedExpression string            `json:"encryptedExpression"`
	ProductValues       map[string]string `json:"productValues"`
}
