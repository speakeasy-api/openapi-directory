package shared

type Feature struct {
	Geometry   *string `json:"geometry,omitempty"`
	Properties *string `json:"properties,omitempty"`
	Type       *string `json:"type,omitempty"`
}
