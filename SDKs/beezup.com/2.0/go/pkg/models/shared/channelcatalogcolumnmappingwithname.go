package shared

// ChannelCatalogColumnMappingWithName
// Represent a mapping between a channel column (considering channel category mapping) and a catalog column
type ChannelCatalogColumnMappingWithName struct {
	CatalogBeezUPColumnName *string  `json:"catalogBeezUPColumnName,omitempty"`
	CatalogColumnID         *string  `json:"catalogColumnId,omitempty"`
	CatalogColumnName       *string  `json:"catalogColumnName,omitempty"`
	ChannelBeezUPColumnName *string  `json:"channelBeezUPColumnName,omitempty"`
	ChannelCategoryPath     []string `json:"channelCategoryPath,omitempty"`
	ChannelColumnID         string   `json:"channelColumnId"`
	ChannelColumnName       string   `json:"channelColumnName"`
}
