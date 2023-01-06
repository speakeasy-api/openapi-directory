package shared

// SegmentsResponse1
// Provides information about all the segments that are associated with an application.
type SegmentsResponse1 struct {
	Item      []SegmentResponse3 `json:"Item"`
	NextToken *string            `json:"NextToken,omitempty"`
}
