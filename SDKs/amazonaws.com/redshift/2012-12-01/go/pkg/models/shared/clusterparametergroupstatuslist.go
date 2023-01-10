package shared

// ClusterParameterGroupStatusList
// Describes the status of a parameter group.
type ClusterParameterGroupStatusList struct {
	ClusterParameterStatusList []ClusterParameterStatus
	ParameterApplyStatus       *string
	ParameterGroupName         *string
}
