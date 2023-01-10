package shared

// NodeGroupMemberList
// Represents a single node within a node group (shard).
type NodeGroupMemberList struct {
	CacheClusterID            *string
	CacheNodeID               *string
	CurrentRole               *string
	PreferredAvailabilityZone *string
	PreferredOutpostArn       *string
	ReadEndpoint              *Endpoint
}
