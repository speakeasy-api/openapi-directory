package shared

// Rule
// A safety rule. A safety rule can be an assertion rule or a gating rule.
type Rule struct {
	ASSERTION *AssertionRule `json:"ASSERTION,omitempty"`
	GATING    *GatingRule    `json:"GATING,omitempty"`
}
