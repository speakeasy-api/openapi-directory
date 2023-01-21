package shared

type GetQuerySuggestionsResponse struct {
	QuerySuggestionsID *string      `json:"QuerySuggestionsId,omitempty"`
	Suggestions        []Suggestion `json:"Suggestions,omitempty"`
}
