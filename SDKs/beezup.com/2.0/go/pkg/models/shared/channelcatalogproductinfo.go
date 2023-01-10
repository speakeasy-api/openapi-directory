package shared

// ChannelCatalogProductInfo
// The channel catalog product information
type ChannelCatalogProductInfo struct {
	Disabled        bool                                       `json:"disabled"`
	Excluded        bool                                       `json:"excluded"`
	ExcludedBy      []string                                   `json:"excludedBy,omitempty"`
	Links           ChannelCatalogProductInfoLinks             `json:"links"`
	Overrides       map[string]ProductOverrideWithCatalogValue `json:"overrides"`
	ProductExists   bool                                       `json:"productExists"`
	ProductID       string                                     `json:"productId"`
	ProductImageURL *string                                    `json:"productImageUrl,omitempty"`
	ProductSku      string                                     `json:"productSku"`
	ProductTitle    string                                     `json:"productTitle"`
	Uncategorized   bool                                       `json:"uncategorized"`
}
