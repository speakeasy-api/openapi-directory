import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Capacity Reservation Fleet cancellation error.
 */
export declare class CancelCapacityReservationFleetsResultFailedFleetCancellationsCancelCapacityReservationFleetError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a Capacity Reservation Fleet that could not be cancelled.
 */
export declare class CancelCapacityReservationFleetsResultFailedFleetCancellations extends SpeakeasyBase {
    cancelCapacityReservationFleetError?: CancelCapacityReservationFleetsResultFailedFleetCancellationsCancelCapacityReservationFleetError;
    capacityReservationFleetId?: string;
}
/**
 * The current state of the Capacity Reservation Fleet.
 */
export declare enum CancelCapacityReservationFleetsResultSuccessfulFleetCancellationsCurrentFleetStateEnum {
    Submitted = "submitted",
    Modifying = "modifying",
    Active = "active",
    PartiallyFulfilled = "partially_fulfilled",
    Expiring = "expiring",
    Expired = "expired",
    Cancelling = "cancelling",
    Cancelled = "cancelled",
    Failed = "failed"
}
/**
 * The previous state of the Capacity Reservation Fleet.
 */
export declare enum CancelCapacityReservationFleetsResultSuccessfulFleetCancellationsPreviousFleetStateEnum {
    Submitted = "submitted",
    Modifying = "modifying",
    Active = "active",
    PartiallyFulfilled = "partially_fulfilled",
    Expiring = "expiring",
    Expired = "expired",
    Cancelling = "cancelling",
    Cancelled = "cancelled",
    Failed = "failed"
}
/**
 * Describes a Capacity Reservation Fleet that was successfully cancelled.
 */
export declare class CancelCapacityReservationFleetsResultSuccessfulFleetCancellations extends SpeakeasyBase {
    capacityReservationFleetId?: string;
    currentFleetState?: CancelCapacityReservationFleetsResultSuccessfulFleetCancellationsCurrentFleetStateEnum;
    previousFleetState?: CancelCapacityReservationFleetsResultSuccessfulFleetCancellationsPreviousFleetStateEnum;
}
/**
 * Success
 */
export declare class CancelCapacityReservationFleetsResult extends SpeakeasyBase {
    failedFleetCancellations?: CancelCapacityReservationFleetsResultFailedFleetCancellations[];
    successfulFleetCancellations?: CancelCapacityReservationFleetsResultSuccessfulFleetCancellations[];
}
