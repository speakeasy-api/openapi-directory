package shared

// ScoreLikesCounts
// A computed version of the weekly, monthly and total of number of likes
// for a score
type ScoreLikesCounts struct {
	Monthly *float64 `json:"monthly,omitempty"`
	Total   *float64 `json:"total,omitempty"`
	Weekly  *float64 `json:"weekly,omitempty"`
}
