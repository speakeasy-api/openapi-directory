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
	ClusterParameterGroups                 []map[string]interface{}
	ClusterPublicKey                       *string
	ClusterRevisionNumber                  *string
	ClusterSecurityGroups                  []map[string]interface{}
	ClusterSnapshotCopyStatus              *ClusterSnapshotCopyStatus
	ClusterStatus                          *string
	ClusterSubnetGroupName                 *string
	ClusterVersion                         *string
	DBName                                 *string
	DataTransferProgress                   *DataTransferProgress
	DeferredMaintenanceWindows             []map[string]interface{}
	ElasticIPStatus                        *ElasticIPStatus
	ElasticResizeNumberOfNodeOptions       *string
	Encrypted                              *bool
	Endpoint                               *Endpoint
	EnhancedVpcRouting                     *bool
	ExpectedNextSnapshotScheduleTime       *time.Time
	ExpectedNextSnapshotScheduleTimeStatus *string
	HsmStatus                              *HsmStatus
	IamRoles                               []map[string]interface{}
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
	Tags                                   []map[string]interface{}
	TotalStorageCapacityInMegaBytes        *int64
	VpcID                                  *string
	VpcSecurityGroups                      []map[string]interface{}
}
