package shared

// ColumnLfTag
// A structure containing the name of a column resource and the tags attached to it.
type ColumnLfTag struct {
	LFTags []LfTagPair `json:"LFTags,omitempty"`
	Name   *string     `json:"Name,omitempty"`
}
