package shared

type UpdateCostCategoryDefinitionRequest struct {
	CostCategoryArn  string                        `json:"CostCategoryArn"`
	DefaultValue     *string                       `json:"DefaultValue,omitempty"`
	RuleVersion      CostCategoryRuleVersionEnum   `json:"RuleVersion"`
	Rules            []CostCategoryRule            `json:"Rules"`
	SplitChargeRules []CostCategorySplitChargeRule `json:"SplitChargeRules,omitempty"`
}
