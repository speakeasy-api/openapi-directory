import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationInstancePlatformEnum } from "./capacityreservationinstanceplatformenum";
import { InstanceTypeEnum } from "./instancetypeenum";
/**
 * Information about an instance type to use in a Capacity Reservation Fleet.
 */
export declare class ReservationFleetInstanceSpecification extends SpeakeasyBase {
    availabilityZone?: string;
    availabilityZoneId?: string;
    ebsOptimized?: boolean;
    instancePlatform?: CapacityReservationInstancePlatformEnum;
    instanceType?: InstanceTypeEnum;
    priority?: number;
    weight?: number;
}
