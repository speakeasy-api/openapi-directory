package shared

// CategoryMappingState
// The category mapping state of the channel catalog
type CategoryMappingState struct {
	Status                          *CategoryMappingStatusEnum `json:"status,omitempty"`
	UncategorizedProductCount       *int32                     `json:"uncategorizedProductCount,omitempty"`
	WithoutCategoryCostProductCount *int32                     `json:"withoutCategoryCostProductCount,omitempty"`
}
