package shared

// ChannelCatalogCategoryConfiguration
// Represent a mapping between a catalog category path and a channel category path.
// The cost on this mapping can be applied.
type ChannelCatalogCategoryConfiguration struct {
	AutoMapNewSubCategories bool     `json:"autoMapNewSubCategories"`
	CatalogCategoryPath     []string `json:"catalogCategoryPath"`
	ChannelCategoryPath     []string `json:"channelCategoryPath,omitempty"`
	CostValue               *float64 `json:"costValue,omitempty"`
}
