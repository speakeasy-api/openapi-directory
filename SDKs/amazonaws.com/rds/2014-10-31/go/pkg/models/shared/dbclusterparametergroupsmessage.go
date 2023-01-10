package shared

// DbClusterParameterGroupsMessage
// <p/>
type DbClusterParameterGroupsMessage struct {
	DBClusterParameterGroups []DbClusterParameterGroupList
	Marker                   *string
}
