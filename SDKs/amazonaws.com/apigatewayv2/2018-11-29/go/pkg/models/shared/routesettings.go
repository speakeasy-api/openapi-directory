package shared

// RouteSettings
// Represents a collection of route settings.
type RouteSettings struct {
	DataTraceEnabled       map[string]interface{} `json:"DataTraceEnabled,omitempty"`
	DetailedMetricsEnabled map[string]interface{} `json:"DetailedMetricsEnabled,omitempty"`
	LoggingLevel           map[string]interface{} `json:"LoggingLevel,omitempty"`
	ThrottlingBurstLimit   map[string]interface{} `json:"ThrottlingBurstLimit,omitempty"`
	ThrottlingRateLimit    map[string]interface{} `json:"ThrottlingRateLimit,omitempty"`
}
