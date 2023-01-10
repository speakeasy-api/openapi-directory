package shared

// DbClusterParameterGroupList
// Detailed information about a cluster parameter group.
type DbClusterParameterGroupList struct {
	DBClusterParameterGroupArn  *string
	DBClusterParameterGroupName *string
	DBParameterGroupFamily      *string
	Description                 *string
}
