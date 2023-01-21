package shared

// CostCategorySplitChargeRule
// Use the split charge rule to split the cost of one Cost Category value across several other target values.
type CostCategorySplitChargeRule struct {
	Method     CostCategorySplitChargeMethodEnum      `json:"Method"`
	Parameters []CostCategorySplitChargeRuleParameter `json:"Parameters,omitempty"`
	Source     string                                 `json:"Source"`
	Targets    []string                               `json:"Targets"`
}
