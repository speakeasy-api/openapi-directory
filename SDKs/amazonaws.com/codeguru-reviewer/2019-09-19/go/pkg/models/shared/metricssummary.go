package shared

// MetricsSummary
//
//	Information about metrics summaries.
type MetricsSummary struct {
	FindingsCount           map[string]interface{} `json:"FindingsCount,omitempty"`
	MeteredLinesOfCodeCount *int64                 `json:"MeteredLinesOfCodeCount,omitempty"`
}
