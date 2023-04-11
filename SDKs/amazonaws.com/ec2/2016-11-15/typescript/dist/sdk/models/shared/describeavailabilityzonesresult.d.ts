import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.
 */
export declare class DescribeAvailabilityZonesResultAvailabilityZonesMessages extends SpeakeasyBase {
    message?: string;
}
/**
 * <p>For Availability Zones, this parameter always has the value of <code>opt-in-not-required</code>.</p> <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible values are <code>opted-in</code>, and <code>not-opted-in</code>.</p>
 */
export declare enum DescribeAvailabilityZonesResultAvailabilityZonesOptInStatusEnum {
    OptInNotRequired = "opt-in-not-required",
    OptedIn = "opted-in",
    NotOptedIn = "not-opted-in"
}
/**
 * The state of the Availability Zone, Local Zone, or Wavelength Zone. This value is always <code>available</code>.
 */
export declare enum DescribeAvailabilityZonesResultAvailabilityZonesStateEnum {
    Available = "available",
    Information = "information",
    Impaired = "impaired",
    Unavailable = "unavailable"
}
/**
 * Describes Availability Zones, Local Zones, and Wavelength Zones.
 */
export declare class DescribeAvailabilityZonesResultAvailabilityZones extends SpeakeasyBase {
    groupName?: string;
    messages?: DescribeAvailabilityZonesResultAvailabilityZonesMessages[];
    networkBorderGroup?: string;
    optInStatus?: DescribeAvailabilityZonesResultAvailabilityZonesOptInStatusEnum;
    parentZoneId?: string;
    parentZoneName?: string;
    regionName?: string;
    state?: DescribeAvailabilityZonesResultAvailabilityZonesStateEnum;
    zoneId?: string;
    zoneName?: string;
    zoneType?: string;
}
/**
 * Success
 */
export declare class DescribeAvailabilityZonesResult extends SpeakeasyBase {
    availabilityZones?: DescribeAvailabilityZonesResultAvailabilityZones[];
}
