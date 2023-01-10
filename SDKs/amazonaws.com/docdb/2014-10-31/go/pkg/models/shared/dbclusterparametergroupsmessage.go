package shared

// DbClusterParameterGroupsMessage
// Represents the output of <a>DBClusterParameterGroups</a>.
type DbClusterParameterGroupsMessage struct {
	DBClusterParameterGroups []DbClusterParameterGroupList
	Marker                   *string
}
