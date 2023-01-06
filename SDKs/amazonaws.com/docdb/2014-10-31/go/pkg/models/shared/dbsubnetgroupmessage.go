package shared

// DbSubnetGroupMessage
// Represents the output of <a>DescribeDBSubnetGroups</a>.
type DbSubnetGroupMessage struct {
	DBSubnetGroups []map[string]interface{}
	Marker         *string
}
