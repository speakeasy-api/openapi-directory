// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CreateCacheClusterMessage - Represents the input of a CreateCacheCluster operation.
type CreateCacheClusterMessage struct {
	AZMode                     *AZModeEnum
	AuthToken                  *string
	AutoMinorVersionUpgrade    *bool
	CacheClusterID             string
	CacheNodeType              *string
	CacheParameterGroupName    *string
	CacheSecurityGroupNames    []string
	CacheSubnetGroupName       *string
	Engine                     *string
	EngineVersion              *string
	IPDiscovery                *IPDiscoveryEnum
	LogDeliveryConfigurations  []LogDeliveryConfigurationRequestList
	NetworkType                *NetworkTypeEnum
	NotificationTopicArn       *string
	NumCacheNodes              *int64
	OutpostMode                *OutpostModeEnum
	Port                       *int64
	PreferredAvailabilityZone  *string
	PreferredAvailabilityZones []string
	PreferredMaintenanceWindow *string
	PreferredOutpostArn        *string
	PreferredOutpostArns       []string
	ReplicationGroupID         *string
	SecurityGroupIds           []string
	SnapshotArns               []string
	SnapshotName               *string
	SnapshotRetentionLimit     *int64
	SnapshotWindow             *string
	Tags                       []TagList
	TransitEncryptionEnabled   *bool
}
