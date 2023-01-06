package shared

// ChannelCatalogColumnMappingWithName
// Represent a mapping between a channel column (considering channel category mapping) and a catalog column
type ChannelCatalogColumnMappingWithName struct {
	CatalogBeezUPColumnName *string `json:"catalogBeezUPColumnName,omitempty"`
	CatalogColumnName       *string `json:"catalogColumnName,omitempty"`
	ChannelBeezUPColumnName *string `json:"channelBeezUPColumnName,omitempty"`
	ChannelColumnName       string  `json:"channelColumnName"`
}
