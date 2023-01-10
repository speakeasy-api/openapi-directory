package shared

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
// Information about the target Capacity Reservation or Capacity Reservation group.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget struct {
	CapacityReservationID               map[string]interface{}
	CapacityReservationResourceGroupArn map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification
// Information about the Capacity Reservation targeting option.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification struct {
	CapacityReservationPreference map[string]interface{}
	CapacityReservationTarget     *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCPUOptions
// The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCPUOptions struct {
	CoreCount      map[string]interface{}
	ThreadsPerCore map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification
// The credit option for CPU usage of the instance.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification struct {
	CPUCredits map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions
// Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions struct {
	Enabled map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions
// Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions struct {
	Configured map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile
// The IAM instance profile.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile struct {
	Arn  map[string]interface{}
	Name map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions
// The options for Spot Instances.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions struct {
	BlockDurationMinutes         map[string]interface{}
	InstanceInterruptionBehavior map[string]interface{}
	MaxPrice                     map[string]interface{}
	SpotInstanceType             map[string]interface{}
	ValidUntil                   map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions
// The market (purchasing) option for the instances.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions struct {
	MarketType  map[string]interface{}
	SpotOptions *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions
// The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions struct {
	HTTPEndpoint            map[string]interface{}
	HTTPProtocolIpv6        map[string]interface{}
	HTTPPutResponseHopLimit map[string]interface{}
	HTTPTokens              map[string]interface{}
	State                   map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring
// The monitoring for the instance.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring struct {
	Enabled map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement
// The placement of the instance.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement struct {
	Affinity             map[string]interface{}
	AvailabilityZone     map[string]interface{}
	GroupName            map[string]interface{}
	HostID               map[string]interface{}
	HostResourceGroupArn map[string]interface{}
	PartitionNumber      map[string]interface{}
	SpreadDomain         map[string]interface{}
	Tenancy              map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData
// Information about the launch template.
type CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData struct {
	BlockDeviceMappings               map[string]interface{}
	CapacityReservationSpecification  *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification
	CPUOptions                        *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCPUOptions
	CreditSpecification               *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification
	DisableAPITermination             map[string]interface{}
	EbsOptimized                      map[string]interface{}
	ElasticGpuSpecifications          map[string]interface{}
	ElasticInferenceAccelerators      map[string]interface{}
	EnclaveOptions                    *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions
	HibernationOptions                *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions
	IamInstanceProfile                *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile
	ImageID                           map[string]interface{}
	InstanceInitiatedShutdownBehavior map[string]interface{}
	InstanceMarketOptions             *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions
	InstanceType                      map[string]interface{}
	KernelID                          map[string]interface{}
	KeyName                           map[string]interface{}
	LicenseSpecifications             map[string]interface{}
	MetadataOptions                   *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions
	Monitoring                        *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring
	NetworkInterfaces                 map[string]interface{}
	Placement                         *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement
	RAMDiskID                         map[string]interface{}
	SecurityGroupIds                  map[string]interface{}
	SecurityGroups                    map[string]interface{}
	TagSpecifications                 map[string]interface{}
	UserData                          map[string]interface{}
}

// CreateLaunchTemplateVersionResultLaunchTemplateVersion
// Information about the launch template version.
type CreateLaunchTemplateVersionResultLaunchTemplateVersion struct {
	CreateTime         map[string]interface{}
	CreatedBy          map[string]interface{}
	DefaultVersion     map[string]interface{}
	LaunchTemplateData *CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData
	LaunchTemplateID   map[string]interface{}
	LaunchTemplateName map[string]interface{}
	VersionDescription map[string]interface{}
	VersionNumber      map[string]interface{}
}

// CreateLaunchTemplateVersionResultWarning
// If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
type CreateLaunchTemplateVersionResultWarning struct {
	Errors map[string]interface{}
}

type CreateLaunchTemplateVersionResult struct {
	LaunchTemplateVersion *CreateLaunchTemplateVersionResultLaunchTemplateVersion
	Warning               *CreateLaunchTemplateVersionResultWarning
}
