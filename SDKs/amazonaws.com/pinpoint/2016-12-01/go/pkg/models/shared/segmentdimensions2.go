package shared

// SegmentDimensions2
// Specifies the dimension settings for a segment.
type SegmentDimensions2 struct {
	Attributes     map[string]AttributeDimension `json:"Attributes,omitempty"`
	Behavior       *SegmentBehaviors             `json:"Behavior,omitempty"`
	Demographic    *SegmentDemographics1         `json:"Demographic,omitempty"`
	Location       *SegmentLocation1             `json:"Location,omitempty"`
	Metrics        map[string]MetricDimension    `json:"Metrics,omitempty"`
	UserAttributes map[string]AttributeDimension `json:"UserAttributes,omitempty"`
}
