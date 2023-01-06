package shared

// InputCaptions
// The captions to be created, if any.
type InputCaptions struct {
	CaptionSources map[string]interface{} `json:"CaptionSources,omitempty"`
	MergePolicy    *string                `json:"MergePolicy,omitempty"`
}
