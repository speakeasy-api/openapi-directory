package shared

// Suggestion
// A single query suggestion.
type Suggestion struct {
	ID    *string          `json:"Id,omitempty"`
	Value *SuggestionValue `json:"Value,omitempty"`
}
