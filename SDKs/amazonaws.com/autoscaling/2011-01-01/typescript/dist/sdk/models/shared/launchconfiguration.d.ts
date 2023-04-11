import { SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { InstanceMetadataOptions } from "./instancemetadataoptions";
import { InstanceMonitoring } from "./instancemonitoring";
/**
 * Describes a launch configuration.
 */
export declare class LaunchConfiguration extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    blockDeviceMappings?: BlockDeviceMapping[];
    classicLinkVPCId?: string;
    classicLinkVPCSecurityGroups?: string[];
    createdTime: Date;
    ebsOptimized?: boolean;
    iamInstanceProfile?: string;
    imageId: string;
    instanceMonitoring?: InstanceMonitoring;
    instanceType: string;
    kernelId?: string;
    keyName?: string;
    launchConfigurationARN?: string;
    launchConfigurationName: string;
    metadataOptions?: InstanceMetadataOptions;
    placementTenancy?: string;
    ramdiskId?: string;
    securityGroups?: string[];
    spotPrice?: string;
    userData?: string;
}
