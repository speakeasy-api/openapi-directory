package shared

// DocumentMetadataConfiguration
// Specifies the properties of a custom index field.
type DocumentMetadataConfiguration struct {
	Name      string                         `json:"Name"`
	Relevance *Relevance                     `json:"Relevance,omitempty"`
	Search    *Search                        `json:"Search,omitempty"`
	Type      DocumentAttributeValueTypeEnum `json:"Type"`
}
