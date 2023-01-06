package shared

import (
	"time"
)

// LaunchConfiguration1
// Describes a launch configuration.
type LaunchConfiguration1 struct {
	AssociatePublicIPAddress     *bool
	BlockDeviceMappings          []BlockDeviceMapping
	ClassicLinkVPCID             *string
	ClassicLinkVPCSecurityGroups []string
	CreatedTime                  time.Time
	EbsOptimized                 *bool
	IamInstanceProfile           *string
	ImageID                      string
	InstanceMonitoring           *InstanceMonitoring
	InstanceType                 string
	KernelID                     *string
	KeyName                      *string
	LaunchConfigurationARN       *string
	LaunchConfigurationName      string
	MetadataOptions              *InstanceMetadataOptions
	PlacementTenancy             *string
	RamdiskID                    *string
	SecurityGroups               []string
	SpotPrice                    *string
	UserData                     *string
}
