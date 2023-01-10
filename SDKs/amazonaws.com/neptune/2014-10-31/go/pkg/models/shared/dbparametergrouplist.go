package shared

// DbParameterGroupList
// <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
type DbParameterGroupList struct {
	DBParameterGroupArn    *string
	DBParameterGroupFamily *string
	DBParameterGroupName   *string
	Description            *string
}
