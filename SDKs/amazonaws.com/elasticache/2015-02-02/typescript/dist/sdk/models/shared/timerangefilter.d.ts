import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filters update actions from the service updates that are in available status during the time range.
 */
export declare class TimeRangeFilter extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
}
