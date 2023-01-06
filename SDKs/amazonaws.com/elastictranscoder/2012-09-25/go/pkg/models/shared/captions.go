package shared

// Captions
// The captions to be created, if any.
type Captions struct {
	CaptionFormats []CaptionFormat        `json:"CaptionFormats,omitempty"`
	CaptionSources map[string]interface{} `json:"CaptionSources,omitempty"`
	MergePolicy    map[string]interface{} `json:"MergePolicy,omitempty"`
}
