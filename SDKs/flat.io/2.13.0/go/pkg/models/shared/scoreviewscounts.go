package shared

// ScoreViewsCounts
// A computed version of the total, weekly, and monthly number of views of
// the score
type ScoreViewsCounts struct {
	Monthly *float64 `json:"monthly,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	Weekly  *float64 `json:"weekly,omitempty"`
}
