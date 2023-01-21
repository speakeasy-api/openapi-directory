package shared

type GetQuerySuggestionsRequest struct {
	IndexID             string `json:"IndexId"`
	MaxSuggestionsCount *int64 `json:"MaxSuggestionsCount,omitempty"`
	QueryText           string `json:"QueryText"`
}
