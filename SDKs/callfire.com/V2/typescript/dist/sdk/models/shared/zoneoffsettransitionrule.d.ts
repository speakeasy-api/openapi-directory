import { SpeakeasyBase } from "../../../internal/utils";
import { LocalTime } from "./localtime";
import { ZoneOffset } from "./zoneoffset";
/**
 * ~
 */
export declare enum ZoneOffsetTransitionRuleDayOfWeekEnum {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * ~
 */
export declare enum ZoneOffsetTransitionRuleMonthEnum {
    January = "JANUARY",
    February = "FEBRUARY",
    March = "MARCH",
    April = "APRIL",
    May = "MAY",
    June = "JUNE",
    July = "JULY",
    August = "AUGUST",
    September = "SEPTEMBER",
    October = "OCTOBER",
    November = "NOVEMBER",
    December = "DECEMBER"
}
/**
 * ~
 */
export declare enum ZoneOffsetTransitionRuleTimeDefinitionEnum {
    Utc = "UTC",
    Wall = "WALL",
    Standard = "STANDARD"
}
/**
 * ~
 */
export declare class ZoneOffsetTransitionRule extends SpeakeasyBase {
    /**
     * ~
     */
    dayOfMonthIndicator?: number;
    /**
     * ~
     */
    dayOfWeek?: ZoneOffsetTransitionRuleDayOfWeekEnum;
    /**
     * Represents a time part of a given date
     */
    localTime?: LocalTime;
    /**
     * ~
     */
    midnightEndOfDay?: boolean;
    /**
     * ~
     */
    month?: ZoneOffsetTransitionRuleMonthEnum;
    /**
     * ~
     */
    offsetAfter?: ZoneOffset;
    /**
     * ~
     */
    offsetBefore?: ZoneOffset;
    /**
     * ~
     */
    standardOffset?: ZoneOffset;
    /**
     * ~
     */
    timeDefinition?: ZoneOffsetTransitionRuleTimeDefinitionEnum;
}
