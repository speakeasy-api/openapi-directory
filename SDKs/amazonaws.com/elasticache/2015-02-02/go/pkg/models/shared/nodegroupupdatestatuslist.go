package shared

// NodeGroupUpdateStatusList
// The status of the service update on the node group
type NodeGroupUpdateStatusList struct {
	NodeGroupID                 *string
	NodeGroupMemberUpdateStatus []NodeGroupMemberUpdateStatusList
}
