// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DescribeRuleGroupRequest struct {
	RuleGroupArn  *string            `json:"RuleGroupArn,omitempty"`
	RuleGroupName *string            `json:"RuleGroupName,omitempty"`
	Type          *RuleGroupTypeEnum `json:"Type,omitempty"`
}
