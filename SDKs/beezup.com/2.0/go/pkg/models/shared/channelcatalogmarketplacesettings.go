package shared

// ChannelCatalogMarketplaceSettings
// The channel catalog marketplace settings
type ChannelCatalogMarketplaceSettings struct {
	Links    ChannelCatalogMarketplaceSettingsLinks `json:"links"`
	Settings []ChannelCatalogMarketplaceSetting     `json:"settings"`
}
