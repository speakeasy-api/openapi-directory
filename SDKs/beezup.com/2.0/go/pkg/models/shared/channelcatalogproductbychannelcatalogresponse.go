package shared

type ChannelCatalogProductByChannelCatalogResponse struct {
	ChannelCatalogs map[string]ChannelCatalogProductInfo `json:"channelCatalogs,omitempty"`
}
