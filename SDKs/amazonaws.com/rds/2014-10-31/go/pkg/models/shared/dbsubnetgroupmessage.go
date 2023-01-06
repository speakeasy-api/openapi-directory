package shared

// DbSubnetGroupMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.
type DbSubnetGroupMessage struct {
	DBSubnetGroups []map[string]interface{}
	Marker         *string
}
