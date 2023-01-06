package shared

// ScorePlaysCounts
// A computed version of the total, weekly, and monthly number of plays of
// the score
type ScorePlaysCounts struct {
	Monthly *float64 `json:"monthly,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	Weekly  *float64 `json:"weekly,omitempty"`
}
