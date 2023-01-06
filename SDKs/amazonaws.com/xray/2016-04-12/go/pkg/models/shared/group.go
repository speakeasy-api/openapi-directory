package shared

// Group
// Details and metadata for a group.
type Group struct {
	FilterExpression      *string                `json:"FilterExpression,omitempty"`
	GroupARN              *string                `json:"GroupARN,omitempty"`
	GroupName             *string                `json:"GroupName,omitempty"`
	InsightsConfiguration *InsightsConfiguration `json:"InsightsConfiguration,omitempty"`
}
