package shared

// DbClusterParameterGroup
// <p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p>
type DbClusterParameterGroup struct {
	DBClusterParameterGroupArn  *string
	DBClusterParameterGroupName *string
	DBParameterGroupFamily      *string
	Description                 *string
}
