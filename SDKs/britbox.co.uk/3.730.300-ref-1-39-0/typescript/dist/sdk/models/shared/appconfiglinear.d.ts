import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppConfigLinear extends SpeakeasyBase {
    /**
     * The maximum minutes of schedule cache time.
     */
    scheduleCacheMaxAgeMinutes?: number;
    /**
     * Number of available upcoming day schedules.
     */
    viewingWindowDaysAfter?: number;
    /**
     * Number of available day schedules in the past.
     */
    viewingWindowDaysBefore?: number;
}
