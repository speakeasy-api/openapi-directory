package shared

// LegacyTrackingChannelCatalogLinks
// Indicates the actions you can do on a channel catalog
type LegacyTrackingChannelCatalogLinks struct {
	Migrate map[string]interface{} `json:"migrate,omitempty"`
	Self    map[string]interface{} `json:"self"`
}
