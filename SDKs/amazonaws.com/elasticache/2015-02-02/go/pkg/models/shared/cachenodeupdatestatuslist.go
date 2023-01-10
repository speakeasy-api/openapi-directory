package shared

import (
	"time"
)

// CacheNodeUpdateStatusList
// The status of the service update on the cache node
type CacheNodeUpdateStatusList struct {
	CacheNodeID                  *string
	NodeDeletionDate             *time.Time
	NodeUpdateEndDate            *time.Time
	NodeUpdateInitiatedBy        *NodeUpdateInitiatedByEnum
	NodeUpdateInitiatedDate      *time.Time
	NodeUpdateStartDate          *time.Time
	NodeUpdateStatus             *NodeUpdateStatusEnum
	NodeUpdateStatusModifiedDate *time.Time
}
