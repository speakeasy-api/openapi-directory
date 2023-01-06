package shared

// EventDimensions1
// Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
type EventDimensions1 struct {
	Attributes map[string]AttributeDimension `json:"Attributes,omitempty"`
	EventType  *SetDimension1                `json:"EventType,omitempty"`
	Metrics    map[string]MetricDimension    `json:"Metrics,omitempty"`
}
