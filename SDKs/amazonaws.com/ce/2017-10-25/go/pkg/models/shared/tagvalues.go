package shared

// TagValues
// <p>The values that are available for a tag.</p> <p>If <code>Values</code> and <code>Key</code> aren't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all tags. That is, it's filtered on resources with no tags.</p> <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the tag <code>Key</code> only. That is, it's filtered on resources without the given tag key.</p>
type TagValues struct {
	Key          *string           `json:"Key,omitempty"`
	MatchOptions []MatchOptionEnum `json:"MatchOptions,omitempty"`
	Values       []string          `json:"Values,omitempty"`
}
