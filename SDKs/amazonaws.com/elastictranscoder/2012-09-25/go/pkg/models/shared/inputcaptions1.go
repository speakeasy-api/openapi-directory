package shared

// InputCaptions1
// The captions to be created, if any.
type InputCaptions1 struct {
	CaptionSources []CaptionSource `json:"CaptionSources,omitempty"`
	MergePolicy    *string         `json:"MergePolicy,omitempty"`
}
