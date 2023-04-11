import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsdetails";
import { AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails } from "./awsautoscalinglaunchconfigurationinstancemonitoringdetails";
import { AwsAutoScalingLaunchConfigurationMetadataOptions } from "./awsautoscalinglaunchconfigurationmetadataoptions";
/**
 * Details about a launch configuration.
 */
export declare class AwsAutoScalingLaunchConfigurationDetails extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    blockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];
    classicLinkVpcId?: string;
    classicLinkVpcSecurityGroups?: string[];
    createdTime?: string;
    ebsOptimized?: boolean;
    iamInstanceProfile?: string;
    imageId?: string;
    instanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;
    instanceType?: string;
    kernelId?: string;
    keyName?: string;
    launchConfigurationName?: string;
    metadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions;
    placementTenancy?: string;
    ramdiskId?: string;
    securityGroups?: string[];
    spotPrice?: string;
    userData?: string;
}
