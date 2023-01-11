import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
/** 
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationId?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationResourceGroupArn?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification
/** 
 * Information about the Capacity Reservation targeting option.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationPreference?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationTarget?: GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
}


// GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions
/** 
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  coreCount?: Record<string, any>;

  @SpeakeasyMetadata()
  threadsPerCore?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification
/** 
 * The credit option for CPU usage of the instance.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuCredits?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions
/** 
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions
/** 
 * Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configured?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile
/** 
 * The IAM instance profile.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: Record<string, any>;

  @SpeakeasyMetadata()
  name?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions
/** 
 * The options for Spot Instances.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blockDurationMinutes?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceInterruptionBehavior?: Record<string, any>;

  @SpeakeasyMetadata()
  maxPrice?: Record<string, any>;

  @SpeakeasyMetadata()
  spotInstanceType?: Record<string, any>;

  @SpeakeasyMetadata()
  validUntil?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions
/** 
 * The market (purchasing) option for the instances.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marketType?: Record<string, any>;

  @SpeakeasyMetadata()
  spotOptions?: GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions;
}


// GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions
/** 
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  httpEndpoint?: Record<string, any>;

  @SpeakeasyMetadata()
  httpProtocolIpv6?: Record<string, any>;

  @SpeakeasyMetadata()
  httpPutResponseHopLimit?: Record<string, any>;

  @SpeakeasyMetadata()
  httpTokens?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataMonitoring
/** 
 * The monitoring for the instance.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataMonitoring extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateDataPlacement
/** 
 * The placement of the instance.
**/
export class GetLaunchTemplateDataResultLaunchTemplateDataPlacement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  affinity?: Record<string, any>;

  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  groupName?: Record<string, any>;

  @SpeakeasyMetadata()
  hostId?: Record<string, any>;

  @SpeakeasyMetadata()
  hostResourceGroupArn?: Record<string, any>;

  @SpeakeasyMetadata()
  partitionNumber?: Record<string, any>;

  @SpeakeasyMetadata()
  spreadDomain?: Record<string, any>;

  @SpeakeasyMetadata()
  tenancy?: Record<string, any>;
}


// GetLaunchTemplateDataResultLaunchTemplateData
/** 
 * The instance data.
**/
export class GetLaunchTemplateDataResultLaunchTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blockDeviceMappings?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationSpecification?: GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification;

  @SpeakeasyMetadata()
  cpuOptions?: GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions;

  @SpeakeasyMetadata()
  creditSpecification?: GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification;

  @SpeakeasyMetadata()
  disableApiTermination?: Record<string, any>;

  @SpeakeasyMetadata()
  ebsOptimized?: Record<string, any>;

  @SpeakeasyMetadata()
  elasticGpuSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  elasticInferenceAccelerators?: Record<string, any>;

  @SpeakeasyMetadata()
  enclaveOptions?: GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions;

  @SpeakeasyMetadata()
  hibernationOptions?: GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions;

  @SpeakeasyMetadata()
  iamInstanceProfile?: GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile;

  @SpeakeasyMetadata()
  imageId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceInitiatedShutdownBehavior?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceMarketOptions?: GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions;

  @SpeakeasyMetadata()
  instanceType?: Record<string, any>;

  @SpeakeasyMetadata()
  kernelId?: Record<string, any>;

  @SpeakeasyMetadata()
  keyName?: Record<string, any>;

  @SpeakeasyMetadata()
  licenseSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  metadataOptions?: GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions;

  @SpeakeasyMetadata()
  monitoring?: GetLaunchTemplateDataResultLaunchTemplateDataMonitoring;

  @SpeakeasyMetadata()
  networkInterfaces?: Record<string, any>;

  @SpeakeasyMetadata()
  placement?: GetLaunchTemplateDataResultLaunchTemplateDataPlacement;

  @SpeakeasyMetadata()
  ramDiskId?: Record<string, any>;

  @SpeakeasyMetadata()
  securityGroupIds?: Record<string, any>;

  @SpeakeasyMetadata()
  securityGroups?: Record<string, any>;

  @SpeakeasyMetadata()
  tagSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  userData?: Record<string, any>;
}


export class GetLaunchTemplateDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateData?: GetLaunchTemplateDataResultLaunchTemplateData;
}
