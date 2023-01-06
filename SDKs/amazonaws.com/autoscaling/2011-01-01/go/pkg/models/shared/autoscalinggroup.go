package shared

import (
	"time"
)

// AutoScalingGroup
// Describes an Auto Scaling group.
type AutoScalingGroup struct {
	AutoScalingGroupARN              *string
	AutoScalingGroupName             string
	AvailabilityZones                []string
	CapacityRebalance                *bool
	Context                          *string
	CreatedTime                      time.Time
	DefaultCooldown                  int64
	DesiredCapacity                  int64
	EnabledMetrics                   []EnabledMetric
	HealthCheckGracePeriod           *int64
	HealthCheckType                  string
	Instances                        []Instance
	LaunchConfigurationName          *string
	LaunchTemplate                   *LaunchTemplateSpecification
	LoadBalancerNames                []string
	MaxInstanceLifetime              *int64
	MaxSize                          int64
	MinSize                          int64
	MixedInstancesPolicy             *MixedInstancesPolicy
	NewInstancesProtectedFromScaleIn *bool
	PlacementGroup                   *string
	PredictedCapacity                *int64
	ServiceLinkedRoleARN             *string
	Status                           *string
	SuspendedProcesses               []SuspendedProcess
	Tags                             []TagDescription
	TargetGroupARNs                  []string
	TerminationPolicies              []string
	VPCZoneIdentifier                *string
	WarmPoolConfiguration            *WarmPoolConfiguration
	WarmPoolSize                     *int64
}
