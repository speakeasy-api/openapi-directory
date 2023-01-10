package shared

// SimpleConditionSegmentDimensions
// The dimension settings for the segment that's associated with the activity.
type SimpleConditionSegmentDimensions struct {
	Attributes     map[string]AttributeDimension `json:"Attributes,omitempty"`
	Behavior       *SegmentBehaviors             `json:"Behavior,omitempty"`
	Demographic    *SegmentDemographics          `json:"Demographic,omitempty"`
	Location       *SegmentLocation              `json:"Location,omitempty"`
	Metrics        map[string]MetricDimension    `json:"Metrics,omitempty"`
	UserAttributes map[string]AttributeDimension `json:"UserAttributes,omitempty"`
}

// SimpleCondition
// Specifies a condition to evaluate for an activity in a journey.
type SimpleCondition struct {
	EventCondition    *EventCondition                   `json:"EventCondition,omitempty"`
	SegmentCondition  *SegmentCondition                 `json:"SegmentCondition,omitempty"`
	SegmentDimensions *SimpleConditionSegmentDimensions `json:"SegmentDimensions,omitempty"`
}
