package shared

type ListSafetyRulesResponse struct {
	NextToken   *string                `json:"NextToken,omitempty"`
	SafetyRules map[string]interface{} `json:"SafetyRules,omitempty"`
}
