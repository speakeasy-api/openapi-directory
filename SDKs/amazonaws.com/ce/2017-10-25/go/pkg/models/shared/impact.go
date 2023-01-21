package shared

// Impact
// The dollar value of the anomaly.
type Impact struct {
	MaxImpact   float64  `json:"MaxImpact"`
	TotalImpact *float64 `json:"TotalImpact,omitempty"`
}
