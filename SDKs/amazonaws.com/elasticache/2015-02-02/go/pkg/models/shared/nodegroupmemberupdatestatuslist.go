package shared

import (
	"time"
)

// NodeGroupMemberUpdateStatusList
// The status of the service update on the node group member
type NodeGroupMemberUpdateStatusList struct {
	CacheClusterID               *string
	CacheNodeID                  *string
	NodeDeletionDate             *time.Time
	NodeUpdateEndDate            *time.Time
	NodeUpdateInitiatedBy        *NodeUpdateInitiatedByEnum
	NodeUpdateInitiatedDate      *time.Time
	NodeUpdateStartDate          *time.Time
	NodeUpdateStatus             *NodeUpdateStatusEnum
	NodeUpdateStatusModifiedDate *time.Time
}
