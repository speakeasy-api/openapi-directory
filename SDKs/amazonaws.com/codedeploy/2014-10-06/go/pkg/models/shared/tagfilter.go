package shared

// TagFilter
// Information about an on-premises instance tag filter.
type TagFilter struct {
	Key   map[string]interface{} `json:"Key,omitempty"`
	Type  *TagFilterTypeEnum     `json:"Type,omitempty"`
	Value *string                `json:"Value,omitempty"`
}
