package shared

// ChannelCatalogMarketplaceSetting
// Model for fetching a channel catalog marketplace setting
type ChannelCatalogMarketplaceSetting struct {
	DiscriminatorType ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum `json:"discriminatorType"`
	Name              string                                                `json:"name"`
}
