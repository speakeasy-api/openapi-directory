package shared

type DbClusterParameterGroupsMessage struct {
	DBClusterParameterGroups []map[string]interface{}
	Marker                   *string
}
