package shared

type DescribeCostCategoryDefinitionRequest struct {
	CostCategoryArn string  `json:"CostCategoryArn"`
	EffectiveOn     *string `json:"EffectiveOn,omitempty"`
}
