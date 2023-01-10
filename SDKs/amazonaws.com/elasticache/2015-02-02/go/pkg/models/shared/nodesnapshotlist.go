package shared

import (
	"time"
)

// NodeSnapshotList
// Represents an individual cache node in a snapshot of a cluster.
type NodeSnapshotList struct {
	CacheClusterID         *string
	CacheNodeCreateTime    *time.Time
	CacheNodeID            *string
	CacheSize              *string
	NodeGroupConfiguration *NodeGroupConfiguration
	NodeGroupID            *string
	SnapshotCreateTime     *time.Time
}
