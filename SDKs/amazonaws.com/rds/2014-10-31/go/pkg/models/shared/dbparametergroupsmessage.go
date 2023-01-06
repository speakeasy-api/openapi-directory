package shared

// DbParameterGroupsMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.
type DbParameterGroupsMessage struct {
	DBParameterGroups []map[string]interface{}
	Marker            *string
}
