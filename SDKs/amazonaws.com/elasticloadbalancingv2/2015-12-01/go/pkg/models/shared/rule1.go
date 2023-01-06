package shared

// Rule1
// Information about a rule.
type Rule1 struct {
	Actions    []Action1
	Conditions []RuleCondition1
	IsDefault  *bool
	Priority   *string
	RuleArn    *string
}
