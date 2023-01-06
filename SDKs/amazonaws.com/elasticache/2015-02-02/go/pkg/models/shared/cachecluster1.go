package shared

import (
	"time"
)

// CacheCluster1
// Contains all of the attributes of a specific cluster.
type CacheCluster1 struct {
	ARN                                *string
	AtRestEncryptionEnabled            *bool
	AuthTokenEnabled                   *bool
	AuthTokenLastModifiedDate          *time.Time
	AutoMinorVersionUpgrade            *bool
	CacheClusterCreateTime             *time.Time
	CacheClusterID                     *string
	CacheClusterStatus                 *string
	CacheNodeType                      *string
	CacheNodes                         []map[string]interface{}
	CacheParameterGroup                *CacheParameterGroupStatus
	CacheSecurityGroups                []map[string]interface{}
	CacheSubnetGroupName               *string
	ClientDownloadLandingPage          *string
	ConfigurationEndpoint              *Endpoint
	Engine                             *string
	EngineVersion                      *string
	LogDeliveryConfigurations          []map[string]interface{}
	NotificationConfiguration          *NotificationConfiguration
	NumCacheNodes                      *int64
	PendingModifiedValues              *PendingModifiedValues
	PreferredAvailabilityZone          *string
	PreferredMaintenanceWindow         *string
	PreferredOutpostArn                *string
	ReplicationGroupID                 *string
	ReplicationGroupLogDeliveryEnabled *bool
	SecurityGroups                     []SecurityGroupMembership
	SnapshotRetentionLimit             *int64
	SnapshotWindow                     *string
	TransitEncryptionEnabled           *bool
}
