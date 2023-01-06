package shared

import (
	"time"
)

// ReplicationGroup1
// Contains all of the attributes of a specific Redis replication group.
type ReplicationGroup1 struct {
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
	LogDeliveryConfigurations  []map[string]interface{}
	MemberClusters             []map[string]interface{}
	MemberClustersOutpostArns  []map[string]interface{}
	MultiAZ                    *MultiAzStatusEnum
	NodeGroups                 []map[string]interface{}
	PendingModifiedValues      *ReplicationGroupPendingModifiedValues1
	ReplicationGroupCreateTime *time.Time
	ReplicationGroupID         *string
	SnapshotRetentionLimit     *int64
	SnapshotWindow             *string
	SnapshottingClusterID      *string
	Status                     *string
	TransitEncryptionEnabled   *bool
	UserGroupIds               []string
}
