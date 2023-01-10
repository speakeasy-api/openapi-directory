package shared

// ParameterGroupList
// Describes a parameter group.
type ParameterGroupList struct {
	Description          *string
	ParameterGroupFamily *string
	ParameterGroupName   *string
	Tags                 []TagList
}
