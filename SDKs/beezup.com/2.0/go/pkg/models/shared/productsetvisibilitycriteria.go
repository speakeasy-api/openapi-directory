package shared

type ProductSetVisibilityCriteria struct {
	Disabled      *bool                                     `json:"disabled,omitempty"`
	Excluded      *bool                                     `json:"excluded,omitempty"`
	Exist         *bool                                     `json:"exist,omitempty"`
	Logic         ProductSetVisibilityCriteriaLogicTypeEnum `json:"logic"`
	Uncategorized *bool                                     `json:"uncategorized,omitempty"`
}
