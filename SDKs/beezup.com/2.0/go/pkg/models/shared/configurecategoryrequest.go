package shared

// ConfigureCategoryRequest
// The request message to make a mapping between catalog category path and a channel category path
type ConfigureCategoryRequest struct {
	ChannelCatalogCategories    []ChannelCatalogCategoryConfiguration `json:"channelCatalogCategories"`
	OverrideSubCategoryMappings bool                                  `json:"overrideSubCategoryMappings"`
}
