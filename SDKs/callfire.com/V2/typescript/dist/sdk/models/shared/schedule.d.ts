import { SpeakeasyBase } from "../../../internal/utils";
import { LocalDate } from "./localdate";
import { LocalTime } from "./localtime";
/**
 * A campaign schedule
 */
export declare class Schedule extends SpeakeasyBase {
    /**
     * ~
     */
    campaignId?: number;
    /**
     * ~
     */
    daysOfWeek?: string[];
    /**
     * ~
     */
    id?: number;
    /**
     * Represents a date object (without time part)
     */
    startDate?: LocalDate;
    /**
     * Represents a time part of a given date
     */
    startTimeOfDay?: LocalTime;
    /**
     * Represents a date object (without time part)
     */
    stopDate?: LocalDate;
    /**
     * Represents a time part of a given date
     */
    stopTimeOfDay?: LocalTime;
    /**
     * ~
     */
    timeZone?: string;
}
