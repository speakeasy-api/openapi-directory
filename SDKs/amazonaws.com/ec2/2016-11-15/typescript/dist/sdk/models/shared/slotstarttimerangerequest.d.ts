import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the time period for a Scheduled Instance to start its first schedule.
 */
export declare class SlotStartTimeRangeRequest extends SpeakeasyBase {
    earliestTime?: Date;
    latestTime?: Date;
}
