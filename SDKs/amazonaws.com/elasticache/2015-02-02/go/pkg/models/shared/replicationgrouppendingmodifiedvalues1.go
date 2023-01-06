package shared

// ReplicationGroupPendingModifiedValues1
// The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
type ReplicationGroupPendingModifiedValues1 struct {
	AuthTokenStatus           *AuthTokenUpdateStatusEnum
	AutomaticFailoverStatus   *PendingAutomaticFailoverStatusEnum
	LogDeliveryConfigurations []PendingLogDeliveryConfiguration
	PrimaryClusterID          *string
	Resharding                *ReshardingStatus1
	UserGroups                *UserGroupsUpdateStatus
}
