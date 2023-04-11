import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a range of time during which CallFire will send a call or text to recipients. Timeframe uses the local timezone of recipient's number
 */
export declare class LocalTimeRestriction extends SpeakeasyBase {
    /**
     * An hour of restriction start
     */
    beginHour?: number;
    /**
     * The minutes to start a restriction
     */
    beginMinute?: number;
    /**
     * A restriction enabled
     */
    enabled?: boolean;
    /**
     * An hour of restriction end
     */
    endHour?: number;
    /**
     * The minutes of restriction end
     */
    endMinute?: number;
}
