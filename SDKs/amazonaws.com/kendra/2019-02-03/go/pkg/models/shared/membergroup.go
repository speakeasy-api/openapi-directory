package shared

// MemberGroup
// The sub groups that belong to a group.
type MemberGroup struct {
	DataSourceID *string `json:"DataSourceId,omitempty"`
	GroupID      string  `json:"GroupId"`
}
