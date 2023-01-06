package shared

// ChannelCatalogColumnMapping
// Represent a mapping between a channel column (considering channel category mapping) and a catalog column
type ChannelCatalogColumnMapping struct {
	CatalogColumnID     *string  `json:"catalogColumnId,omitempty"`
	ChannelCategoryPath []string `json:"channelCategoryPath,omitempty"`
	ChannelColumnID     string   `json:"channelColumnId"`
}
