package shared

// Group
// One level of grouped data in the results.
type Group struct {
	Keys    []string               `json:"Keys,omitempty"`
	Metrics map[string]MetricValue `json:"Metrics,omitempty"`
}
