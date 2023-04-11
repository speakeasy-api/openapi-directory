import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the Dedicated Host supports multiple instance types of the same instance family. If the value is <code>on</code>, the Dedicated Host supports multiple instance types in the instance family. If the value is <code>off</code>, the Dedicated Host supports a single instance type only.
 */
export declare enum DescribeHostsResultHostsAllowsMultipleInstanceTypesEnum {
    On = "on",
    Off = "off"
}
/**
 * Whether auto-placement is on or off.
 */
export declare enum DescribeHostsResultHostsAutoPlacementEnum {
    On = "on",
    Off = "off"
}
/**
 * Information about the number of instances that can be launched onto the Dedicated Host.
 */
export declare class DescribeHostsResultHostsAvailableCapacityAvailableInstanceCapacity extends SpeakeasyBase {
    availableCapacity?: number;
    instanceType?: string;
    totalCapacity?: number;
}
/**
 * Information about the instances running on the Dedicated Host.
 */
export declare class DescribeHostsResultHostsAvailableCapacity extends SpeakeasyBase {
    availableInstanceCapacity?: DescribeHostsResultHostsAvailableCapacityAvailableInstanceCapacity[];
    availableVCpus?: number;
}
/**
 * Indicates whether host maintenance is enabled or disabled for the Dedicated Host.
 */
export declare enum DescribeHostsResultHostsHostMaintenanceEnum {
    On = "on",
    Off = "off"
}
/**
 * The hardware specifications of the Dedicated Host.
 */
export declare class DescribeHostsResultHostsHostProperties extends SpeakeasyBase {
    cores?: number;
    instanceFamily?: string;
    instanceType?: string;
    sockets?: number;
    totalVCpus?: number;
}
/**
 * Indicates whether host recovery is enabled or disabled for the Dedicated Host.
 */
export declare enum DescribeHostsResultHostsHostRecoveryEnum {
    On = "on",
    Off = "off"
}
/**
 * Describes an instance running on a Dedicated Host.
 */
export declare class DescribeHostsResultHostsInstances extends SpeakeasyBase {
    instanceId?: string;
    instanceType?: string;
    ownerId?: string;
}
/**
 * The Dedicated Host's state.
 */
export declare enum DescribeHostsResultHostsStateEnum {
    Available = "available",
    UnderAssessment = "under-assessment",
    PermanentFailure = "permanent-failure",
    Released = "released",
    ReleasedPermanentFailure = "released-permanent-failure",
    Pending = "pending"
}
/**
 * Describes a tag.
 */
export declare class DescribeHostsResultHostsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes the properties of the Dedicated Host.
 */
export declare class DescribeHostsResultHosts extends SpeakeasyBase {
    allocationTime?: Date;
    allowsMultipleInstanceTypes?: DescribeHostsResultHostsAllowsMultipleInstanceTypesEnum;
    autoPlacement?: DescribeHostsResultHostsAutoPlacementEnum;
    availabilityZone?: string;
    availabilityZoneId?: string;
    availableCapacity?: DescribeHostsResultHostsAvailableCapacity;
    clientToken?: string;
    hostId?: string;
    hostMaintenance?: DescribeHostsResultHostsHostMaintenanceEnum;
    hostProperties?: DescribeHostsResultHostsHostProperties;
    hostRecovery?: DescribeHostsResultHostsHostRecoveryEnum;
    hostReservationId?: string;
    instances?: DescribeHostsResultHostsInstances[];
    memberOfServiceLinkedResourceGroup?: boolean;
    outpostArn?: string;
    ownerId?: string;
    releaseTime?: Date;
    state?: DescribeHostsResultHostsStateEnum;
    tags?: DescribeHostsResultHostsTags[];
}
/**
 * Success
 */
export declare class DescribeHostsResult extends SpeakeasyBase {
    hosts?: DescribeHostsResultHosts[];
    nextToken?: string;
}
