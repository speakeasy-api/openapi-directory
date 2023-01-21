package shared

type CreateCostCategoryDefinitionRequest struct {
	DefaultValue     *string                       `json:"DefaultValue,omitempty"`
	Name             string                        `json:"Name"`
	RuleVersion      CostCategoryRuleVersionEnum   `json:"RuleVersion"`
	Rules            []CostCategoryRule            `json:"Rules"`
	SplitChargeRules []CostCategorySplitChargeRule `json:"SplitChargeRules,omitempty"`
}
