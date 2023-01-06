package shared

// DbSecurityGroupMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.
type DbSecurityGroupMessage struct {
	DBSecurityGroups []map[string]interface{}
	Marker           map[string]interface{}
}
