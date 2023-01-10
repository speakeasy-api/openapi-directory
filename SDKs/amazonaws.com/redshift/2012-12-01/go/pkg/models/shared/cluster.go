package shared

import (
	"time"
)

// Cluster
// Describes a cluster.
type Cluster struct {
	AllowVersionUpgrade                    *bool
	AquaConfiguration                      *AquaConfiguration
	AutomatedSnapshotRetentionPeriod       *int64
	AvailabilityZone                       *string
	AvailabilityZoneRelocationStatus       *string
	ClusterAvailabilityStatus              *string
	ClusterCreateTime                      *time.Time
	ClusterIdentifier                      *string
	ClusterNamespaceArn                    *string
	ClusterNodes                           []ClusterNode
	ClusterParameterGroups                 []ClusterParameterGroupStatusList
	ClusterPublicKey                       *string
	ClusterRevisionNumber                  *string
	ClusterSecurityGroups                  []ClusterSecurityGroupMembershipList
	ClusterSnapshotCopyStatus              *ClusterSnapshotCopyStatus
	ClusterStatus                          *string
	ClusterSubnetGroupName                 *string
	ClusterVersion                         *string
	DBName                                 *string
	DataTransferProgress                   *DataTransferProgress
	DeferredMaintenanceWindows             []DeferredMaintenanceWindowsList
	ElasticIPStatus                        *ElasticIPStatus
	ElasticResizeNumberOfNodeOptions       *string
	Encrypted                              *bool
	Endpoint                               *Endpoint
	EnhancedVpcRouting                     *bool
	ExpectedNextSnapshotScheduleTime       *time.Time
	ExpectedNextSnapshotScheduleTimeStatus *string
	HsmStatus                              *HsmStatus
	IamRoles                               []ClusterIamRoleList
	KmsKeyID                               *string
	MaintenanceTrackName                   *string
	ManualSnapshotRetentionPeriod          *int64
	MasterUsername                         *string
	ModifyStatus                           *string
	NextMaintenanceWindowStartTime         *time.Time
	NodeType                               *string
	NumberOfNodes                          *int64
	PendingActions                         []string
	PendingModifiedValues                  *PendingModifiedValues
	PreferredMaintenanceWindow             *string
	PubliclyAccessible                     *bool
	ResizeInfo                             *ResizeInfo
	RestoreStatus                          *RestoreStatus
	SnapshotScheduleIdentifier             *string
	SnapshotScheduleState                  *ScheduleStateEnum
	Tags                                   []TagList
	TotalStorageCapacityInMegaBytes        *int64
	VpcID                                  *string
	VpcSecurityGroups                      []VpcSecurityGroupMembershipList
}
