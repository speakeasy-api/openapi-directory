package shared

type DbClusterParameterGroupsMessage struct {
	DBClusterParameterGroups []DbClusterParameterGroupList
	Marker                   *string
}
