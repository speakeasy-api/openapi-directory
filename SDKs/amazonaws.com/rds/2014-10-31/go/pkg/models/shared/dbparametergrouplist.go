package shared

// DbParameterGroupList
// <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
type DbParameterGroupList struct {
	DBParameterGroupArn    *string
	DBParameterGroupFamily *string
	DBParameterGroupName   *string
	Description            *string
}
