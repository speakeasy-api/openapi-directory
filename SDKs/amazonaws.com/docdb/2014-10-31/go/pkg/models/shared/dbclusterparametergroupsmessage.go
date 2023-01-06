package shared

// DbClusterParameterGroupsMessage
// Represents the output of <a>DBClusterParameterGroups</a>.
type DbClusterParameterGroupsMessage struct {
	DBClusterParameterGroups []map[string]interface{}
	Marker                   *string
}
