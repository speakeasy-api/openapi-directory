package shared

// ChannelCatalogList
// This is the index of the channel catalog API
type ChannelCatalogList struct {
	ChannelCatalogs map[string]ChannelCatalog   `json:"channelCatalogs,omitempty"`
	Links           *ChannelCatalogListLinks    `json:"links,omitempty"`
	LovLinks        *ChannelCatalogListLovLinks `json:"lovLinks,omitempty"`
}
