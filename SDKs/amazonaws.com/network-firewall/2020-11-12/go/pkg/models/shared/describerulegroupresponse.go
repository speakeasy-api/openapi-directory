package shared

type DescribeRuleGroupResponse struct {
	RuleGroup         *RuleGroup1       `json:"RuleGroup,omitempty"`
	RuleGroupResponse RuleGroupResponse `json:"RuleGroupResponse"`
	UpdateToken       string            `json:"UpdateToken"`
}
