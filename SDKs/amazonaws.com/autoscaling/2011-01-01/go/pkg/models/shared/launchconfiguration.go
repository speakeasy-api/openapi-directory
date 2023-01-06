package shared

import (
	"time"
)

// LaunchConfiguration
// Describes a launch configuration.
type LaunchConfiguration struct {
	AssociatePublicIPAddress     *bool
	BlockDeviceMappings          []BlockDeviceMapping
	ClassicLinkVPCID             *string
	ClassicLinkVPCSecurityGroups []string
	CreatedTime                  time.Time
	EbsOptimized                 *bool
	IamInstanceProfile           map[string]interface{}
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
