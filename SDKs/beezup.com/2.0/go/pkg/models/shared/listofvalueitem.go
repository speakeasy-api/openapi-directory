package shared

// ListOfValueItem
// This object is used by LOV apis
type ListOfValueItem struct {
	CodeIdentifier  string  `json:"codeIdentifier"`
	IntIdentifier   int32   `json:"intIdentifier"`
	Position        *int32  `json:"position,omitempty"`
	TranslationText *string `json:"translationText,omitempty"`
}
