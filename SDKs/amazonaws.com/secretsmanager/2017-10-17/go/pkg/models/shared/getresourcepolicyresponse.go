package shared

type GetResourcePolicyResponse struct {
	ARN            *string `json:"ARN,omitempty"`
	Name           *string `json:"Name,omitempty"`
	ResourcePolicy *string `json:"ResourcePolicy,omitempty"`
}
