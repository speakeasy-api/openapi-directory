package shared

// AdditionalResultAttributeValue
// An attribute returned with a document from a search.
type AdditionalResultAttributeValue struct {
	TextWithHighlightsValue *TextWithHighlights `json:"TextWithHighlightsValue,omitempty"`
}
