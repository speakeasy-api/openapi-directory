package shared

// DbSubnetGroupMessage
// Represents the output of <a>DescribeDBSubnetGroups</a>.
type DbSubnetGroupMessage struct {
	DBSubnetGroups []DbSubnetGroups
	Marker         *string
}
