package shared

// ResultByTime
// The result that's associated with a time period.
type ResultByTime struct {
	Estimated  *bool                  `json:"Estimated,omitempty"`
	Groups     []Group                `json:"Groups,omitempty"`
	TimePeriod *DateInterval          `json:"TimePeriod,omitempty"`
	Total      map[string]MetricValue `json:"Total,omitempty"`
}
