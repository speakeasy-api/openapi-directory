package shared

type ListCostCategoryDefinitionsRequest struct {
	EffectiveOn *string `json:"EffectiveOn,omitempty"`
	MaxResults  *int64  `json:"MaxResults,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
}
