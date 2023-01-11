import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
/** 
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationId?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationResourceGroupArn?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification
/** 
 * Information about the Capacity Reservation targeting option.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationPreference?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationTarget?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions
/** 
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  coreCount?: Record<string, any>;

  @SpeakeasyMetadata()
  threadsPerCore?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification
/** 
 * The credit option for CPU usage of the instance.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuCredits?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions
/** 
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions
/** 
 * Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configured?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile
/** 
 * The IAM instance profile.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: Record<string, any>;

  @SpeakeasyMetadata()
  name?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions
/** 
 * The options for Spot Instances.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions extends SpeakeasyBase {
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


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions
/** 
 * The market (purchasing) option for the instances.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marketType?: Record<string, any>;

  @SpeakeasyMetadata()
  spotOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions
/** 
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions extends SpeakeasyBase {
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


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring
/** 
 * The monitoring for the instance.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement
/** 
 * The placement of the instance.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement extends SpeakeasyBase {
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


// CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData
/** 
 * Information about the launch template.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blockDeviceMappings?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationSpecification?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification;

  @SpeakeasyMetadata()
  cpuOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions;

  @SpeakeasyMetadata()
  creditSpecification?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification;

  @SpeakeasyMetadata()
  disableApiTermination?: Record<string, any>;

  @SpeakeasyMetadata()
  ebsOptimized?: Record<string, any>;

  @SpeakeasyMetadata()
  elasticGpuSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  elasticInferenceAccelerators?: Record<string, any>;

  @SpeakeasyMetadata()
  enclaveOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions;

  @SpeakeasyMetadata()
  hibernationOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions;

  @SpeakeasyMetadata()
  iamInstanceProfile?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile;

  @SpeakeasyMetadata()
  imageId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceInitiatedShutdownBehavior?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceMarketOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions;

  @SpeakeasyMetadata()
  instanceType?: Record<string, any>;

  @SpeakeasyMetadata()
  kernelId?: Record<string, any>;

  @SpeakeasyMetadata()
  keyName?: Record<string, any>;

  @SpeakeasyMetadata()
  licenseSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  metadataOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions;

  @SpeakeasyMetadata()
  monitoring?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring;

  @SpeakeasyMetadata()
  networkInterfaces?: Record<string, any>;

  @SpeakeasyMetadata()
  placement?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement;

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


// CreateLaunchTemplateVersionResultLaunchTemplateVersion
/** 
 * Information about the launch template version.
**/
export class CreateLaunchTemplateVersionResultLaunchTemplateVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime?: Record<string, any>;

  @SpeakeasyMetadata()
  createdBy?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultVersion?: Record<string, any>;

  @SpeakeasyMetadata()
  launchTemplateData?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData;

  @SpeakeasyMetadata()
  launchTemplateId?: Record<string, any>;

  @SpeakeasyMetadata()
  launchTemplateName?: Record<string, any>;

  @SpeakeasyMetadata()
  versionDescription?: Record<string, any>;

  @SpeakeasyMetadata()
  versionNumber?: Record<string, any>;
}


// CreateLaunchTemplateVersionResultWarning
/** 
 * If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
**/
export class CreateLaunchTemplateVersionResultWarning extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errors?: Record<string, any>;
}


export class CreateLaunchTemplateVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateVersion?: CreateLaunchTemplateVersionResultLaunchTemplateVersion;

  @SpeakeasyMetadata()
  warning?: CreateLaunchTemplateVersionResultWarning;
}
