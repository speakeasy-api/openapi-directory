package shared

// ChannelCatalogCategoryMappingsLinks
// The action you can do on the category mappings
type ChannelCatalogCategoryMappingsLinks struct {
	Disable  map[string]interface{}               `json:"disable,omitempty"`
	Reenable map[string]interface{}               `json:"reenable,omitempty"`
	Self     LinksGetChannelCatalogCategoriesLink `json:"self"`
}
