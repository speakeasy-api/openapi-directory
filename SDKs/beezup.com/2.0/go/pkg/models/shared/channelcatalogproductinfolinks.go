package shared

// ChannelCatalogProductInfoLinks
// Indicates the differents actions you can do on a channel product
type ChannelCatalogProductInfoLinks struct {
	Disable  map[string]interface{} `json:"disable,omitempty"`
	Override map[string]interface{} `json:"override"`
	Reenable map[string]interface{} `json:"reenable,omitempty"`
	Self     map[string]interface{} `json:"self"`
}
