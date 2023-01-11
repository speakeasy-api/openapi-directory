import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Capacity Reservation.
**/
export declare class CreateCapacityReservationResultCapacityReservation extends SpeakeasyBase {
    availabilityZone?: Record<string, any>;
    availabilityZoneId?: Record<string, any>;
    availableInstanceCount?: Record<string, any>;
    capacityReservationArn?: Record<string, any>;
    capacityReservationId?: Record<string, any>;
    createDate?: Record<string, any>;
    ebsOptimized?: Record<string, any>;
    endDate?: Record<string, any>;
    endDateType?: Record<string, any>;
    ephemeralStorage?: Record<string, any>;
    instanceMatchCriteria?: Record<string, any>;
    instancePlatform?: Record<string, any>;
    instanceType?: Record<string, any>;
    outpostArn?: Record<string, any>;
    ownerId?: Record<string, any>;
    startDate?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    tenancy?: Record<string, any>;
    totalInstanceCount?: Record<string, any>;
}
export declare class CreateCapacityReservationResult extends SpeakeasyBase {
    capacityReservation?: CreateCapacityReservationResultCapacityReservation;
}
