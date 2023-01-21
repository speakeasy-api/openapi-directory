package shared

type CreateCostCategoryDefinitionResponse struct {
	CostCategoryArn *string `json:"CostCategoryArn,omitempty"`
	EffectiveStart  *string `json:"EffectiveStart,omitempty"`
}
