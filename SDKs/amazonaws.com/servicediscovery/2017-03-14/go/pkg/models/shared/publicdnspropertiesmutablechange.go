package shared

// PublicDNSPropertiesMutableChange
// Updated DNS properties for the public DNS namespace.
type PublicDNSPropertiesMutableChange struct {
	SOA SoaChange `json:"SOA"`
}
