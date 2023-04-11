import { SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";
/**
 * Weekly schedule allows to schedule operations by day of week and time of the day
 */
export declare class WeeklySchedule extends SpeakeasyBase {
    /**
     * A scheduled days when operation will trigger
     */
    daysOfWeek?: string[];
    /**
     * Represents a time part of a given date
     */
    startTimeOfDay?: LocalTime;
    /**
     * Represents a time part of a given date
     */
    stopTimeOfDay?: LocalTime;
    /**
     * A user's timezone
     */
    timeZone?: string;
}
