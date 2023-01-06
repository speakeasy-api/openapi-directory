package shared

// ChannelCatalogCategoryConfigurationInfo
// For all catalog categories the current mapping applied
type ChannelCatalogCategoryConfigurationInfo struct {
	CatalogCategoryPath []string                               `json:"catalogCategoryPath"`
	ChannelCategoryPath []string                               `json:"channelCategoryPath,omitempty"`
	CostValue           *float64                               `json:"costValue,omitempty"`
	Links               ChannelCatalogCategoryMappingInfoLinks `json:"links"`
}
