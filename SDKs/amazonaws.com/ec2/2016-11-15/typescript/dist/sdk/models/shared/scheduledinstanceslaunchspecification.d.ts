import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstancesEbs } from "./scheduledinstancesebs";
import { ScheduledInstancesIamInstanceProfile } from "./scheduledinstancesiaminstanceprofile";
import { ScheduledInstancesMonitoring } from "./scheduledinstancesmonitoring";
import { ScheduledInstancesPlacement } from "./scheduledinstancesplacement";
/**
 * Describes a block device mapping for a Scheduled Instance.
 */
export declare class ScheduledInstancesLaunchSpecificationBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: ScheduledInstancesEbs;
    noDevice?: string;
    virtualName?: string;
}
/**
 * Describes an IPv6 address.
 */
export declare class ScheduledInstancesLaunchSpecificationNetworkInterfacesIpv6Addresses extends SpeakeasyBase {
    ipv6Address?: string;
}
/**
 * Describes a private IPv4 address for a Scheduled Instance.
 */
export declare class ScheduledInstancesLaunchSpecificationNetworkInterfacesPrivateIpAddressConfigs extends SpeakeasyBase {
    primary?: boolean;
    privateIpAddress?: string;
}
/**
 * Describes a network interface for a Scheduled Instance.
 */
export declare class ScheduledInstancesLaunchSpecificationNetworkInterfaces extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    deleteOnTermination?: boolean;
    description?: string;
    deviceIndex?: number;
    groups?: string[];
    ipv6AddressCount?: number;
    ipv6Addresses?: ScheduledInstancesLaunchSpecificationNetworkInterfacesIpv6Addresses[];
    networkInterfaceId?: string;
    privateIpAddress?: string;
    privateIpAddressConfigs?: ScheduledInstancesLaunchSpecificationNetworkInterfacesPrivateIpAddressConfigs[];
    secondaryPrivateIpAddressCount?: number;
    subnetId?: string;
}
/**
 * <p>Describes the launch specification for a Scheduled Instance.</p> <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet. You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 */
export declare class ScheduledInstancesLaunchSpecification extends SpeakeasyBase {
    blockDeviceMappings?: ScheduledInstancesLaunchSpecificationBlockDeviceMappings[];
    ebsOptimized?: boolean;
    iamInstanceProfile?: ScheduledInstancesIamInstanceProfile;
    imageId: string;
    instanceType?: string;
    kernelId?: string;
    keyName?: string;
    monitoring?: ScheduledInstancesMonitoring;
    networkInterfaces?: ScheduledInstancesLaunchSpecificationNetworkInterfaces[];
    placement?: ScheduledInstancesPlacement;
    ramdiskId?: string;
    securityGroupIds?: string[];
    subnetId?: string;
    userData?: string;
}
