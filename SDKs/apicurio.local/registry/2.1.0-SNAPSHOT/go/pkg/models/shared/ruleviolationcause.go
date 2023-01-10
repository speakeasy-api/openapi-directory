package shared

type RuleViolationCause struct {
	Context     *string `json:"context,omitempty"`
	Description *string `json:"description,omitempty"`
}
