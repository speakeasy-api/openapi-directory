package shared

// CostCategory
// The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.
type CostCategory struct {
	CostCategoryArn  string                         `json:"CostCategoryArn"`
	DefaultValue     *string                        `json:"DefaultValue,omitempty"`
	EffectiveEnd     *string                        `json:"EffectiveEnd,omitempty"`
	EffectiveStart   string                         `json:"EffectiveStart"`
	Name             string                         `json:"Name"`
	ProcessingStatus []CostCategoryProcessingStatus `json:"ProcessingStatus,omitempty"`
	RuleVersion      CostCategoryRuleVersionEnum    `json:"RuleVersion"`
	Rules            []CostCategoryRule             `json:"Rules"`
	SplitChargeRules []CostCategorySplitChargeRule  `json:"SplitChargeRules,omitempty"`
}
