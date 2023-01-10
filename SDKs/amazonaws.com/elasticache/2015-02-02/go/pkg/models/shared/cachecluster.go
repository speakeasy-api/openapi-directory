package shared

import (
	"time"
)

// CacheCluster
// Contains all of the attributes of a specific cluster.
type CacheCluster struct {
	ARN                                *string
	AtRestEncryptionEnabled            *bool
	AuthTokenEnabled                   *bool
	AuthTokenLastModifiedDate          *time.Time
	AutoMinorVersionUpgrade            *bool
	CacheClusterCreateTime             *time.Time
	CacheClusterID                     *string
	CacheClusterStatus                 *string
	CacheNodeType                      *string
	CacheNodes                         []CacheNodeList
	CacheParameterGroup                *CacheParameterGroupStatus
	CacheSecurityGroups                []CacheSecurityGroupMembershipList
	CacheSubnetGroupName               *string
	ClientDownloadLandingPage          *string
	ConfigurationEndpoint              *Endpoint
	Engine                             *string
	EngineVersion                      *string
	LogDeliveryConfigurations          []LogDeliveryConfigurationList
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
