package shared

// CostCategoryRule
// Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
type CostCategoryRule struct {
	InheritedValue *CostCategoryInheritedValueDimension `json:"InheritedValue,omitempty"`
	Rule           *Expression                          `json:"Rule,omitempty"`
	Type           *CostCategoryRuleTypeEnum            `json:"Type,omitempty"`
	Value          *string                              `json:"Value,omitempty"`
}
