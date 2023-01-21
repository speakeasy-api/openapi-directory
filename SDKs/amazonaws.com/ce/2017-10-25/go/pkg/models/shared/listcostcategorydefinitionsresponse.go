package shared

type ListCostCategoryDefinitionsResponse struct {
	CostCategoryReferences []CostCategoryReference `json:"CostCategoryReferences,omitempty"`
	NextToken              *string                 `json:"NextToken,omitempty"`
}
