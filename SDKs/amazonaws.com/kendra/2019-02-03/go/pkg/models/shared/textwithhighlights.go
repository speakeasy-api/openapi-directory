package shared

// TextWithHighlights
// Provides text and information about where to highlight the text.
type TextWithHighlights struct {
	Highlights []Highlight `json:"Highlights,omitempty"`
	Text       *string     `json:"Text,omitempty"`
}
