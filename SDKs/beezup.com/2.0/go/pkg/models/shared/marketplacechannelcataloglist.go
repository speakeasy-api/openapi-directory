package shared

// MarketplaceChannelCatalogList
// The marketplace channel catalog list
type MarketplaceChannelCatalogList struct {
	Links                      MarketplaceChannelCatalogListLinks `json:"links"`
	MarketplaceChannelCatalogs []MarketplaceChannelCatalog        `json:"marketplaceChannelCatalogs"`
}
