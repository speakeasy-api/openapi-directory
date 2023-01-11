import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget extends SpeakeasyBase {
    capacityReservationId?: Record<string, any>;
    capacityReservationResourceGroupArn?: Record<string, any>;
}
/**
 * Information about the Capacity Reservation targeting option.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification extends SpeakeasyBase {
    capacityReservationPreference?: Record<string, any>;
    capacityReservationTarget?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
}
/**
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions extends SpeakeasyBase {
    coreCount?: Record<string, any>;
    threadsPerCore?: Record<string, any>;
}
/**
 * The credit option for CPU usage of the instance.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification extends SpeakeasyBase {
    cpuCredits?: Record<string, any>;
}
/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions extends SpeakeasyBase {
    enabled?: Record<string, any>;
}
/**
 * Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions extends SpeakeasyBase {
    configured?: Record<string, any>;
}
/**
 * The IAM instance profile.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile extends SpeakeasyBase {
    arn?: Record<string, any>;
    name?: Record<string, any>;
}
/**
 * The options for Spot Instances.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions extends SpeakeasyBase {
    blockDurationMinutes?: Record<string, any>;
    instanceInterruptionBehavior?: Record<string, any>;
    maxPrice?: Record<string, any>;
    spotInstanceType?: Record<string, any>;
    validUntil?: Record<string, any>;
}
/**
 * The market (purchasing) option for the instances.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions extends SpeakeasyBase {
    marketType?: Record<string, any>;
    spotOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions;
}
/**
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: Record<string, any>;
    httpProtocolIpv6?: Record<string, any>;
    httpPutResponseHopLimit?: Record<string, any>;
    httpTokens?: Record<string, any>;
    state?: Record<string, any>;
}
/**
 * The monitoring for the instance.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring extends SpeakeasyBase {
    enabled?: Record<string, any>;
}
/**
 * The placement of the instance.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement extends SpeakeasyBase {
    affinity?: Record<string, any>;
    availabilityZone?: Record<string, any>;
    groupName?: Record<string, any>;
    hostId?: Record<string, any>;
    hostResourceGroupArn?: Record<string, any>;
    partitionNumber?: Record<string, any>;
    spreadDomain?: Record<string, any>;
    tenancy?: Record<string, any>;
}
/**
 * Information about the launch template.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData extends SpeakeasyBase {
    blockDeviceMappings?: Record<string, any>;
    capacityReservationSpecification?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification;
    cpuOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions;
    creditSpecification?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification;
    disableApiTermination?: Record<string, any>;
    ebsOptimized?: Record<string, any>;
    elasticGpuSpecifications?: Record<string, any>;
    elasticInferenceAccelerators?: Record<string, any>;
    enclaveOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions;
    hibernationOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions;
    iamInstanceProfile?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile;
    imageId?: Record<string, any>;
    instanceInitiatedShutdownBehavior?: Record<string, any>;
    instanceMarketOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions;
    instanceType?: Record<string, any>;
    kernelId?: Record<string, any>;
    keyName?: Record<string, any>;
    licenseSpecifications?: Record<string, any>;
    metadataOptions?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions;
    monitoring?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring;
    networkInterfaces?: Record<string, any>;
    placement?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement;
    ramDiskId?: Record<string, any>;
    securityGroupIds?: Record<string, any>;
    securityGroups?: Record<string, any>;
    tagSpecifications?: Record<string, any>;
    userData?: Record<string, any>;
}
/**
 * Information about the launch template version.
**/
export declare class CreateLaunchTemplateVersionResultLaunchTemplateVersion extends SpeakeasyBase {
    createTime?: Record<string, any>;
    createdBy?: Record<string, any>;
    defaultVersion?: Record<string, any>;
    launchTemplateData?: CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData;
    launchTemplateId?: Record<string, any>;
    launchTemplateName?: Record<string, any>;
    versionDescription?: Record<string, any>;
    versionNumber?: Record<string, any>;
}
/**
 * If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
**/
export declare class CreateLaunchTemplateVersionResultWarning extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class CreateLaunchTemplateVersionResult extends SpeakeasyBase {
    launchTemplateVersion?: CreateLaunchTemplateVersionResultLaunchTemplateVersion;
    warning?: CreateLaunchTemplateVersionResultWarning;
}
