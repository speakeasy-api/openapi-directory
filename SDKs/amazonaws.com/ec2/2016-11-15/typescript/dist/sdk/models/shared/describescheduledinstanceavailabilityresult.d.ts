import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The schedule recurrence.
 */
export declare class DescribeScheduledInstanceAvailabilityResultScheduledInstanceAvailabilitySetRecurrence extends SpeakeasyBase {
    frequency?: string;
    interval?: number;
    occurrenceDaySet?: number[];
    occurrenceRelativeToEnd?: boolean;
    occurrenceUnit?: string;
}
/**
 * Describes a schedule that is available for your Scheduled Instances.
 */
export declare class DescribeScheduledInstanceAvailabilityResultScheduledInstanceAvailabilitySet extends SpeakeasyBase {
    availabilityZone?: string;
    availableInstanceCount?: number;
    firstSlotStartTime?: Date;
    hourlyPrice?: string;
    instanceType?: string;
    maxTermDurationInDays?: number;
    minTermDurationInDays?: number;
    networkPlatform?: string;
    platform?: string;
    purchaseToken?: string;
    recurrence?: DescribeScheduledInstanceAvailabilityResultScheduledInstanceAvailabilitySetRecurrence;
    slotDurationInHours?: number;
    totalScheduledInstanceHours?: number;
}
/**
 * Contains the output of DescribeScheduledInstanceAvailability.
 */
export declare class DescribeScheduledInstanceAvailabilityResult extends SpeakeasyBase {
    nextToken?: string;
    scheduledInstanceAvailabilitySet?: DescribeScheduledInstanceAvailabilityResultScheduledInstanceAvailabilitySet[];
}
