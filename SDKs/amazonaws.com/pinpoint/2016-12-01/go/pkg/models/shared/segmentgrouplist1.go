package shared

// SegmentGroupList1
// Specifies the settings that define the relationships between segment groups for a segment.
type SegmentGroupList1 struct {
	Groups  []SegmentGroup1 `json:"Groups,omitempty"`
	Include *IncludeEnum    `json:"Include,omitempty"`
}
