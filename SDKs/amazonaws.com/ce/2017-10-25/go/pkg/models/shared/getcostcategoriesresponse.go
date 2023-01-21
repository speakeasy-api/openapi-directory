package shared

type GetCostCategoriesResponse struct {
	CostCategoryNames  []string `json:"CostCategoryNames,omitempty"`
	CostCategoryValues []string `json:"CostCategoryValues,omitempty"`
	NextPageToken      *string  `json:"NextPageToken,omitempty"`
	ReturnSize         int64    `json:"ReturnSize"`
	TotalSize          int64    `json:"TotalSize"`
}
