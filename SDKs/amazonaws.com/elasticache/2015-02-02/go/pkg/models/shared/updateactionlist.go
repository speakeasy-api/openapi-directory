package shared

import (
	"time"
)

// UpdateActionList
// The status of the service update for a specific replication group
type UpdateActionList struct {
	CacheClusterID                      *string
	CacheNodeUpdateStatus               []CacheNodeUpdateStatusList
	Engine                              *string
	EstimatedUpdateTime                 *string
	NodeGroupUpdateStatus               []NodeGroupUpdateStatusList
	NodesUpdated                        *string
	ReplicationGroupID                  *string
	ServiceUpdateName                   *string
	ServiceUpdateRecommendedApplyByDate *time.Time
	ServiceUpdateReleaseDate            *time.Time
	ServiceUpdateSeverity               *ServiceUpdateSeverityEnum
	ServiceUpdateStatus                 *ServiceUpdateStatusEnum
	ServiceUpdateType                   *ServiceUpdateTypeEnum
	SLAMet                              *SLAMetEnum
	UpdateActionAvailableDate           *time.Time
	UpdateActionStatus                  *UpdateActionStatusEnum
	UpdateActionStatusModifiedDate      *time.Time
}
