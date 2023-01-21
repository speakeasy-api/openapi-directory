package shared

// ACLConfiguration
// Provides information about the column that should be used for filtering the query response by groups.
type ACLConfiguration struct {
	AllowedGroupsColumnName string `json:"AllowedGroupsColumnName"`
}
