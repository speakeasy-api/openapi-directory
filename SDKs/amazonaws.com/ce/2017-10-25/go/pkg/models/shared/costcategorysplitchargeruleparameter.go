package shared

// CostCategorySplitChargeRuleParameter
// The parameters for a split charge method.
type CostCategorySplitChargeRuleParameter struct {
	Type   CostCategorySplitChargeRuleParameterTypeEnum `json:"Type"`
	Values []string                                     `json:"Values"`
}
