package shared

// LegacyTrackingChannelCatalogList
// This is the index of the channel catalog API
type LegacyTrackingChannelCatalogList struct {
	ChannelCatalogs map[string]LegacyTrackingChannelCatalog `json:"channelCatalogs,omitempty"`
	Links           *LegacyTrackingChannelCatalogListLinks  `json:"links,omitempty"`
}
