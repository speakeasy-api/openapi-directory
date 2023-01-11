import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget extends SpeakeasyBase {
    capacityReservationId?: Record<string, any>;
    capacityReservationResourceGroupArn?: Record<string, any>;
}
/**
 * Information about the Capacity Reservation targeting option.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification extends SpeakeasyBase {
    capacityReservationPreference?: Record<string, any>;
    capacityReservationTarget?: GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
}
/**
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions extends SpeakeasyBase {
    coreCount?: Record<string, any>;
    threadsPerCore?: Record<string, any>;
}
/**
 * The credit option for CPU usage of the instance.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification extends SpeakeasyBase {
    cpuCredits?: Record<string, any>;
}
/**
 * Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions extends SpeakeasyBase {
    enabled?: Record<string, any>;
}
/**
 * Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions extends SpeakeasyBase {
    configured?: Record<string, any>;
}
/**
 * The IAM instance profile.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile extends SpeakeasyBase {
    arn?: Record<string, any>;
    name?: Record<string, any>;
}
/**
 * The options for Spot Instances.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions extends SpeakeasyBase {
    blockDurationMinutes?: Record<string, any>;
    instanceInterruptionBehavior?: Record<string, any>;
    maxPrice?: Record<string, any>;
    spotInstanceType?: Record<string, any>;
    validUntil?: Record<string, any>;
}
/**
 * The market (purchasing) option for the instances.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions extends SpeakeasyBase {
    marketType?: Record<string, any>;
    spotOptions?: GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions;
}
/**
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: Record<string, any>;
    httpProtocolIpv6?: Record<string, any>;
    httpPutResponseHopLimit?: Record<string, any>;
    httpTokens?: Record<string, any>;
    state?: Record<string, any>;
}
/**
 * The monitoring for the instance.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataMonitoring extends SpeakeasyBase {
    enabled?: Record<string, any>;
}
/**
 * The placement of the instance.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateDataPlacement extends SpeakeasyBase {
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
 * The instance data.
**/
export declare class GetLaunchTemplateDataResultLaunchTemplateData extends SpeakeasyBase {
    blockDeviceMappings?: Record<string, any>;
    capacityReservationSpecification?: GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification;
    cpuOptions?: GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions;
    creditSpecification?: GetLaunchTemplateDataResultLaunchTemplateDataCreditSpecification;
    disableApiTermination?: Record<string, any>;
    ebsOptimized?: Record<string, any>;
    elasticGpuSpecifications?: Record<string, any>;
    elasticInferenceAccelerators?: Record<string, any>;
    enclaveOptions?: GetLaunchTemplateDataResultLaunchTemplateDataEnclaveOptions;
    hibernationOptions?: GetLaunchTemplateDataResultLaunchTemplateDataHibernationOptions;
    iamInstanceProfile?: GetLaunchTemplateDataResultLaunchTemplateDataIamInstanceProfile;
    imageId?: Record<string, any>;
    instanceInitiatedShutdownBehavior?: Record<string, any>;
    instanceMarketOptions?: GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions;
    instanceType?: Record<string, any>;
    kernelId?: Record<string, any>;
    keyName?: Record<string, any>;
    licenseSpecifications?: Record<string, any>;
    metadataOptions?: GetLaunchTemplateDataResultLaunchTemplateDataMetadataOptions;
    monitoring?: GetLaunchTemplateDataResultLaunchTemplateDataMonitoring;
    networkInterfaces?: Record<string, any>;
    placement?: GetLaunchTemplateDataResultLaunchTemplateDataPlacement;
    ramDiskId?: Record<string, any>;
    securityGroupIds?: Record<string, any>;
    securityGroups?: Record<string, any>;
    tagSpecifications?: Record<string, any>;
    userData?: Record<string, any>;
}
export declare class GetLaunchTemplateDataResult extends SpeakeasyBase {
    launchTemplateData?: GetLaunchTemplateDataResultLaunchTemplateData;
}
