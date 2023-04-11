import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error code.
 */
export declare enum DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsErrorCodeEnum {
    ReservedInstancesIdInvalid = "reserved-instances-id-invalid",
    ReservedInstancesNotInQueuedState = "reserved-instances-not-in-queued-state",
    UnexpectedError = "unexpected-error"
}
/**
 * The error.
 */
export declare class DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsError extends SpeakeasyBase {
    code?: DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsErrorCodeEnum;
    message?: string;
}
/**
 * Describes a Reserved Instance whose queued purchase was not deleted.
 */
export declare class DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletions extends SpeakeasyBase {
    error?: DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletionsError;
    reservedInstancesId?: string;
}
/**
 * Describes a Reserved Instance whose queued purchase was successfully deleted.
 */
export declare class DeleteQueuedReservedInstancesResultSuccessfulQueuedPurchaseDeletions extends SpeakeasyBase {
    reservedInstancesId?: string;
}
/**
 * Success
 */
export declare class DeleteQueuedReservedInstancesResult extends SpeakeasyBase {
    failedQueuedPurchaseDeletions?: DeleteQueuedReservedInstancesResultFailedQueuedPurchaseDeletions[];
    successfulQueuedPurchaseDeletions?: DeleteQueuedReservedInstancesResultSuccessfulQueuedPurchaseDeletions[];
}
