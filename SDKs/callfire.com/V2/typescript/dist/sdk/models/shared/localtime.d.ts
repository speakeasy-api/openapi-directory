import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a time part of a given date
 */
export declare class LocalTime extends SpeakeasyBase {
    /**
     * An hour of the day. Available values: 0-23
     */
    hour?: number;
    /**
     * The minutes. Available values: 0-59
     */
    minute?: number;
    /**
     * ~
     */
    nano?: number;
    /**
     * The seconds.  Available values: 0-59
     */
    second?: number;
}
