package shared

type GetImagePolicyResponse struct {
	Policy    *string                `json:"policy,omitempty"`
	RequestID map[string]interface{} `json:"requestId,omitempty"`
}
