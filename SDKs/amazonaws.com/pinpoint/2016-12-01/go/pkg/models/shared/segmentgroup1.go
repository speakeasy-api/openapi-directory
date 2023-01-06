package shared

// SegmentGroup1
// Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
type SegmentGroup1 struct {
	Dimensions     map[string]interface{} `json:"Dimensions,omitempty"`
	SourceSegments []SegmentReference     `json:"SourceSegments,omitempty"`
	SourceType     *SourceTypeEnum        `json:"SourceType,omitempty"`
	Type           *TypeEnum              `json:"Type,omitempty"`
}
