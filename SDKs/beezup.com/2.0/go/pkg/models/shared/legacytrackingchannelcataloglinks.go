package shared

// LegacyTrackingChannelCatalogLinks
// Indicates the actions you can do on a channel catalog
type LegacyTrackingChannelCatalogLinks struct {
	Migrate *LinksMigrateLegacyTrackingChannelCatalogLink `json:"migrate,omitempty"`
	Self    LinksGetLegacyTrackingChannelCatalogLink      `json:"self"`
}
