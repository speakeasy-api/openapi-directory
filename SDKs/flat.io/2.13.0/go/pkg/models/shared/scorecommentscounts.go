package shared

// ScoreCommentsCounts
// A computed version of the total, unique, weekly and monthly number of
// comments added on the documents (this doesn't include inline comments).
type ScoreCommentsCounts struct {
	Monthly *float64 `json:"monthly,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	Unique  *float64 `json:"unique,omitempty"`
	Weekly  *float64 `json:"weekly,omitempty"`
}
