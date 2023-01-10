package shared

type DescribeGlobalReplicationGroupsResult struct {
	GlobalReplicationGroups []GlobalReplicationGroupList
	Marker                  *string
}
