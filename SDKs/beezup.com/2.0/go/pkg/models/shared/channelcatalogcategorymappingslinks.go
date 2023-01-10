package shared

// ChannelCatalogCategoryMappingsLinks
// The action you can do on the category mappings
type ChannelCatalogCategoryMappingsLinks struct {
	Disable  *LinksDisableChannelCatalogCategoryMappingLink  `json:"disable,omitempty"`
	Reenable *LinksReenableChannelCatalogCategoryMappingLink `json:"reenable,omitempty"`
	Self     LinksGetChannelCatalogCategoriesLink            `json:"self"`
}
