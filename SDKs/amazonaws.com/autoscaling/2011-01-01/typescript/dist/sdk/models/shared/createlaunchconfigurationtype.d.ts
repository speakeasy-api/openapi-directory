import { SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { InstanceMetadataOptions } from "./instancemetadataoptions";
import { InstanceMonitoring } from "./instancemonitoring";
export declare class CreateLaunchConfigurationType extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    blockDeviceMappings?: BlockDeviceMapping[];
    classicLinkVPCId?: string;
    classicLinkVPCSecurityGroups?: string[];
    ebsOptimized?: boolean;
    iamInstanceProfile?: string;
    imageId?: string;
    instanceId?: string;
    instanceMonitoring?: InstanceMonitoring;
    instanceType?: string;
    kernelId?: string;
    keyName?: string;
    launchConfigurationName: string;
    metadataOptions?: InstanceMetadataOptions;
    placementTenancy?: string;
    ramdiskId?: string;
    securityGroups?: string[];
    spotPrice?: string;
    userData?: string;
}
