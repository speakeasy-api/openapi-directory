package shared

// TagFilter1
// Information about an on-premises instance tag filter.
type TagFilter1 struct {
	Key   *string            `json:"Key,omitempty"`
	Type  *TagFilterTypeEnum `json:"Type,omitempty"`
	Value *string            `json:"Value,omitempty"`
}
