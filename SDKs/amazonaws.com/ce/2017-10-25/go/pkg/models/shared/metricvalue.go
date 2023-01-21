package shared

// MetricValue
// The aggregated value for a metric.
type MetricValue struct {
	Amount *string `json:"Amount,omitempty"`
	Unit   *string `json:"Unit,omitempty"`
}
