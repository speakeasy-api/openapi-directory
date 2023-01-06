package shared

// SimpleCondition
// Specifies a condition to evaluate for an activity in a journey.
type SimpleCondition struct {
	EventCondition    *EventCondition        `json:"EventCondition,omitempty"`
	SegmentCondition  *SegmentCondition      `json:"SegmentCondition,omitempty"`
	SegmentDimensions map[string]interface{} `json:"SegmentDimensions,omitempty"`
}
