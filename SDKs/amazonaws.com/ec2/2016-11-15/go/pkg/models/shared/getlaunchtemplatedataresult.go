package shared

// GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
// Information about the target Capacity Reservation or Capacity Reservation group.
type GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget struct {
	CapacityReservationID               map[string]interface{}
	CapacityReservationResourceGroupArn map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification
// Information about the Capacity Reservation targeting option.
type GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification struct {
	CapacityReservationPreference map[string]interface{}
	CapacityReservationTarget     *GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
}

// GetLaunchTemplateDataResultLaunchTemplateDataCPUOptions
// The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
type GetLaunchTemplateDataResultLaunchTemplateDataCPUOptions struct {
	CoreCount      map[string]interface{}
	ThreadsPerCore map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification
// The credit option for CPU usage of the instance.
type GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification struct {
	CPUCredits map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions
// Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
type GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions struct {
	Enabled map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions
// Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
type GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions struct {
	Configured map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile
// The IAM instance profile.
type GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile struct {
	Arn  map[string]interface{}
	Name map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions
// The options for Spot Instances.
type GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions struct {
	BlockDurationMinutes         map[string]interface{}
	InstanceInterruptionBehavior map[string]interface{}
	MaxPrice                     map[string]interface{}
	SpotInstanceType             map[string]interface{}
	ValidUntil                   map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions
// The market (purchasing) option for the instances.
type GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions struct {
	MarketType  map[string]interface{}
	SpotOptions *GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions
}

// GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions
// The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
type GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions struct {
	HTTPEndpoint            map[string]interface{}
	HTTPProtocolIpv6        map[string]interface{}
	HTTPPutResponseHopLimit map[string]interface{}
	HTTPTokens              map[string]interface{}
	State                   map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataMonitoring
// The monitoring for the instance.
type GetLaunchTemplateDataResultLaunchTemplateDataMonitoring struct {
	Enabled map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateDataPlacement
// The placement of the instance.
type GetLaunchTemplateDataResultLaunchTemplateDataPlacement struct {
	Affinity             map[string]interface{}
	AvailabilityZone     map[string]interface{}
	GroupName            map[string]interface{}
	HostID               map[string]interface{}
	HostResourceGroupArn map[string]interface{}
	PartitionNumber      map[string]interface{}
	SpreadDomain         map[string]interface{}
	Tenancy              map[string]interface{}
}

// GetLaunchTemplateDataResultLaunchTemplateData
// The instance data.
type GetLaunchTemplateDataResultLaunchTemplateData struct {
	BlockDeviceMappings               map[string]interface{}
	CapacityReservationSpecification  *GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification
	CPUOptions                        *GetLaunchTemplateDataResultLaunchTemplateDataCPUOptions
	CreditSpecification               *GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification
	DisableAPITermination             map[string]interface{}
	EbsOptimized                      map[string]interface{}
	ElasticGpuSpecifications          map[string]interface{}
	ElasticInferenceAccelerators      map[string]interface{}
	EnclaveOptions                    *GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions
	HibernationOptions                *GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions
	IamInstanceProfile                *GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile
	ImageID                           map[string]interface{}
	InstanceInitiatedShutdownBehavior map[string]interface{}
	InstanceMarketOptions             *GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions
	InstanceType                      map[string]interface{}
	KernelID                          map[string]interface{}
	KeyName                           map[string]interface{}
	LicenseSpecifications             map[string]interface{}
	MetadataOptions                   *GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions
	Monitoring                        *GetLaunchTemplateDataResultLaunchTemplateDataMonitoring
	NetworkInterfaces                 map[string]interface{}
	Placement                         *GetLaunchTemplateDataResultLaunchTemplateDataPlacement
	RAMDiskID                         map[string]interface{}
	SecurityGroupIds                  map[string]interface{}
	SecurityGroups                    map[string]interface{}
	TagSpecifications                 map[string]interface{}
	UserData                          map[string]interface{}
}

type GetLaunchTemplateDataResult struct {
	LaunchTemplateData *GetLaunchTemplateDataResultLaunchTemplateData
}
