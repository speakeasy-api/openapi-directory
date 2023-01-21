package shared

type GetCostCategoriesRequest struct {
	CostCategoryName *string          `json:"CostCategoryName,omitempty"`
	Filter           *Expression      `json:"Filter,omitempty"`
	MaxResults       *int64           `json:"MaxResults,omitempty"`
	NextPageToken    *string          `json:"NextPageToken,omitempty"`
	SearchString     *string          `json:"SearchString,omitempty"`
	SortBy           []SortDefinition `json:"SortBy,omitempty"`
	TimePeriod       DateInterval     `json:"TimePeriod"`
}
