package shared

import (
	"time"
)

// ReplicationGroup
// Contains all of the attributes of a specific Redis replication group.
type ReplicationGroup struct {
	ARN                        *string
	AtRestEncryptionEnabled    *bool
	AuthTokenEnabled           *bool
	AuthTokenLastModifiedDate  *time.Time
	AutomaticFailover          *AutomaticFailoverStatusEnum
	CacheNodeType              *string
	ClusterEnabled             *bool
	ConfigurationEndpoint      *Endpoint
	Description                *string
	GlobalReplicationGroupInfo *GlobalReplicationGroupInfo
	KmsKeyID                   *string
	LogDeliveryConfigurations  []LogDeliveryConfigurationList
	MemberClusters             []map[string]interface{}
	MemberClustersOutpostArns  []map[string]interface{}
	MultiAZ                    *MultiAzStatusEnum
	NodeGroups                 []NodeGroupList
	PendingModifiedValues      *ReplicationGroupPendingModifiedValues
	ReplicationGroupCreateTime *time.Time
	ReplicationGroupID         *string
	SnapshotRetentionLimit     *int64
	SnapshotWindow             *string
	SnapshottingClusterID      *string
	Status                     *string
	TransitEncryptionEnabled   *bool
	UserGroupIds               []string
}
