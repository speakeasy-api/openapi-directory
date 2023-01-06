package shared

type DescribeGlobalReplicationGroupsResult struct {
	GlobalReplicationGroups []map[string]interface{}
	Marker                  *string
}
