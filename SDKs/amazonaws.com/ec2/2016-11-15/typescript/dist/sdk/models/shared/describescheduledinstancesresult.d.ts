import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The schedule recurrence.
 */
export declare class DescribeScheduledInstancesResultScheduledInstanceSetRecurrence extends SpeakeasyBase {
    frequency?: string;
    interval?: number;
    occurrenceDaySet?: number[];
    occurrenceRelativeToEnd?: boolean;
    occurrenceUnit?: string;
}
/**
 * Describes a Scheduled Instance.
 */
export declare class DescribeScheduledInstancesResultScheduledInstanceSet extends SpeakeasyBase {
    availabilityZone?: string;
    createDate?: Date;
    hourlyPrice?: string;
    instanceCount?: number;
    instanceType?: string;
    networkPlatform?: string;
    nextSlotStartTime?: Date;
    platform?: string;
    previousSlotEndTime?: Date;
    recurrence?: DescribeScheduledInstancesResultScheduledInstanceSetRecurrence;
    scheduledInstanceId?: string;
    slotDurationInHours?: number;
    termEndDate?: Date;
    termStartDate?: Date;
    totalScheduledInstanceHours?: number;
}
/**
 * Contains the output of DescribeScheduledInstances.
 */
export declare class DescribeScheduledInstancesResult extends SpeakeasyBase {
    nextToken?: string;
    scheduledInstanceSet?: DescribeScheduledInstancesResultScheduledInstanceSet[];
}
