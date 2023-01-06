package shared

// ClusterSubnetGroupMessage
// Contains the output from the <a>DescribeClusterSubnetGroups</a> action.
type ClusterSubnetGroupMessage struct {
	ClusterSubnetGroups []map[string]interface{}
	Marker              *string
}
