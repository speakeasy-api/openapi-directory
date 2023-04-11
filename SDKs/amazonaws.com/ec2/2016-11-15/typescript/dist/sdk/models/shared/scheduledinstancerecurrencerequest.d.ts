import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the recurring schedule for a Scheduled Instance.
 */
export declare class ScheduledInstanceRecurrenceRequest extends SpeakeasyBase {
    frequency?: string;
    interval?: number;
    occurrenceDays?: number[];
    occurrenceRelativeToEnd?: boolean;
    occurrenceUnit?: string;
}
