import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The usage type. <code>used</code> indicates that the instance capacity is in use by instances that are running in the Capacity Reservation.
 */
export declare enum CreateCapacityReservationResultCapacityReservationCapacityAllocationsAllocationTypeEnum {
    Used = "used"
}
/**
 * Information about instance capacity usage for a Capacity Reservation.
 */
export declare class CreateCapacityReservationResultCapacityReservationCapacityAllocations extends SpeakeasyBase {
    allocationType?: CreateCapacityReservationResultCapacityReservationCapacityAllocationsAllocationTypeEnum;
    count?: number;
}
/**
 * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p> <ul> <li> <p> <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p> </li> <li> <p> <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p> </li> </ul>
 */
export declare enum CreateCapacityReservationResultCapacityReservationEndDateTypeEnum {
    Unlimited = "unlimited",
    Limited = "limited"
}
/**
 * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options include:</p> <ul> <li> <p> <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying any additional parameters.</p> </li> <li> <p> <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p> </li> </ul>
 */
export declare enum CreateCapacityReservationResultCapacityReservationInstanceMatchCriteriaEnum {
    Open = "open",
    Targeted = "targeted"
}
/**
 * The type of operating system for which the Capacity Reservation reserves capacity.
 */
export declare enum CreateCapacityReservationResultCapacityReservationInstancePlatformEnum {
    LinuxUNIX = "Linux/UNIX",
    RedHatEnterpriseLinux = "Red Hat Enterprise Linux",
    SUSELinux = "SUSE Linux",
    Windows = "Windows",
    WindowsWithSQLServer = "Windows with SQL Server",
    WindowsWithSQLServerEnterprise = "Windows with SQL Server Enterprise",
    WindowsWithSQLServerStandard = "Windows with SQL Server Standard",
    WindowsWithSQLServerWeb = "Windows with SQL Server Web",
    LinuxWithSQLServerStandard = "Linux with SQL Server Standard",
    LinuxWithSQLServerWeb = "Linux with SQL Server Web",
    LinuxWithSQLServerEnterprise = "Linux with SQL Server Enterprise",
    RHELWithSQLServerStandard = "RHEL with SQL Server Standard",
    RHELWithSQLServerEnterprise = "RHEL with SQL Server Enterprise",
    RHELWithSQLServerWeb = "RHEL with SQL Server Web",
    RHELWithHA = "RHEL with HA",
    RHELWithHAAndSQLServerStandard = "RHEL with HA and SQL Server Standard",
    RHELWithHAAndSQLServerEnterprise = "RHEL with HA and SQL Server Enterprise"
}
/**
 * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p> <ul> <li> <p> <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p> </li> <li> <p> <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified in your request. The reserved capacity is no longer available for your use.</p> </li> <li> <p> <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use.</p> </li> <li> <p> <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p> </li> <li> <p> <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters, capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p> </li> </ul>
 */
export declare enum CreateCapacityReservationResultCapacityReservationStateEnum {
    Active = "active",
    Expired = "expired",
    Cancelled = "cancelled",
    Pending = "pending",
    Failed = "failed"
}
/**
 * Describes a tag.
 */
export declare class CreateCapacityReservationResultCapacityReservationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p> <ul> <li> <p> <code>default</code> - The Capacity Reservation is created on hardware that is shared with other Amazon Web Services accounts.</p> </li> <li> <p> <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single Amazon Web Services account.</p> </li> </ul>
 */
export declare enum CreateCapacityReservationResultCapacityReservationTenancyEnum {
    Default = "default",
    Dedicated = "dedicated"
}
/**
 * Information about the Capacity Reservation.
 */
export declare class CreateCapacityReservationResultCapacityReservation extends SpeakeasyBase {
    availabilityZone?: string;
    availabilityZoneId?: string;
    availableInstanceCount?: number;
    capacityAllocations?: CreateCapacityReservationResultCapacityReservationCapacityAllocations[];
    capacityReservationArn?: string;
    capacityReservationFleetId?: string;
    capacityReservationId?: string;
    createDate?: Date;
    ebsOptimized?: boolean;
    endDate?: Date;
    endDateType?: CreateCapacityReservationResultCapacityReservationEndDateTypeEnum;
    ephemeralStorage?: boolean;
    instanceMatchCriteria?: CreateCapacityReservationResultCapacityReservationInstanceMatchCriteriaEnum;
    instancePlatform?: CreateCapacityReservationResultCapacityReservationInstancePlatformEnum;
    instanceType?: string;
    outpostArn?: string;
    ownerId?: string;
    placementGroupArn?: string;
    startDate?: Date;
    state?: CreateCapacityReservationResultCapacityReservationStateEnum;
    tags?: CreateCapacityReservationResultCapacityReservationTags[];
    tenancy?: CreateCapacityReservationResultCapacityReservationTenancyEnum;
    totalInstanceCount?: number;
}
/**
 * Success
 */
export declare class CreateCapacityReservationResult extends SpeakeasyBase {
    capacityReservation?: CreateCapacityReservationResultCapacityReservation;
}
