package shared

type ValidateResourcePolicyRequest struct {
	ResourcePolicy map[string]interface{} `json:"ResourcePolicy"`
	SecretID       *string                `json:"SecretId,omitempty"`
}
