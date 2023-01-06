package shared

// MarketplaceChannelCatalogLinks
// Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
type MarketplaceChannelCatalogLinks struct {
	Properties     map[string]interface{}                       `json:"properties"`
	Publications   map[string]interface{}                       `json:"publications,omitempty"`
	PublishOptions []MarketplaceChannelCatalogPublicationOption `json:"publishOptions,omitempty"`
	Settings       map[string]interface{}                       `json:"settings"`
}
