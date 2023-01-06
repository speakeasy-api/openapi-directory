package shared

// DbClusterParameterGroupsMessage
// <p/>
type DbClusterParameterGroupsMessage struct {
	DBClusterParameterGroups []map[string]interface{}
	Marker                   *string
}
