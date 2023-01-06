package shared

type PutKeyPolicyRequest struct {
	BypassPolicyLockoutSafetyCheck *bool                  `json:"BypassPolicyLockoutSafetyCheck,omitempty"`
	KeyID                          string                 `json:"KeyId"`
	Policy                         string                 `json:"Policy"`
	PolicyName                     map[string]interface{} `json:"PolicyName"`
}
