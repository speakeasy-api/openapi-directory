package shared

// ChannelCatalogProductInfo
// The channel catalog product information
type ChannelCatalogProductInfo struct {
	Disabled      bool                                       `json:"disabled"`
	Excluded      bool                                       `json:"excluded"`
	ExcludedBy    []string                                   `json:"excludedBy,omitempty"`
	Links         ChannelCatalogProductInfoLinks             `json:"links"`
	Overrides     map[string]ProductOverrideWithCatalogValue `json:"overrides"`
	Uncategorized bool                                       `json:"uncategorized"`
}
