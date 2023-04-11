import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the time period for a Scheduled Instance to start its first schedule. The time period must span less than one day.
 */
export declare class SlotDateTimeRangeRequest extends SpeakeasyBase {
    earliestTime: Date;
    latestTime: Date;
}
