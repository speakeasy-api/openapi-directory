package shared

// ScoreRevisionStatistics
// The statistics related to the score revision (additions and deletions)
type ScoreRevisionStatistics struct {
	Additions *float64 `json:"additions,omitempty"`
	Deletions *float64 `json:"deletions,omitempty"`
}
