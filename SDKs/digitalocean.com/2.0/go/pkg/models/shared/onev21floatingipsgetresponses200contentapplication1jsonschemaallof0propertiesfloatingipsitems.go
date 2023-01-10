package shared

// Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion
// The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
type Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems struct {
	Droplet *interface{}                                                                                         `json:"droplet,omitempty"`
	IP      *string                                                                                              `json:"ip,omitempty"`
	Locked  *bool                                                                                                `json:"locked,omitempty"`
	Region  *Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion `json:"region,omitempty"`
}
