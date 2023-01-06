package shared

// DbClusterParameterGroup
// Detailed information about a cluster parameter group.
type DbClusterParameterGroup struct {
	DBClusterParameterGroupArn  *string
	DBClusterParameterGroupName *string
	DBParameterGroupFamily      *string
	Description                 *string
}
