import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The schedule recurrence.
 */
export declare class PurchaseScheduledInstancesResultScheduledInstanceSetRecurrence extends SpeakeasyBase {
    frequency?: string;
    interval?: number;
    occurrenceDaySet?: number[];
    occurrenceRelativeToEnd?: boolean;
    occurrenceUnit?: string;
}
/**
 * Describes a Scheduled Instance.
 */
export declare class PurchaseScheduledInstancesResultScheduledInstanceSet extends SpeakeasyBase {
    availabilityZone?: string;
    createDate?: Date;
    hourlyPrice?: string;
    instanceCount?: number;
    instanceType?: string;
    networkPlatform?: string;
    nextSlotStartTime?: Date;
    platform?: string;
    previousSlotEndTime?: Date;
    recurrence?: PurchaseScheduledInstancesResultScheduledInstanceSetRecurrence;
    scheduledInstanceId?: string;
    slotDurationInHours?: number;
    termEndDate?: Date;
    termStartDate?: Date;
    totalScheduledInstanceHours?: number;
}
/**
 * Contains the output of PurchaseScheduledInstances.
 */
export declare class PurchaseScheduledInstancesResult extends SpeakeasyBase {
    scheduledInstanceSet?: PurchaseScheduledInstancesResultScheduledInstanceSet[];
}
