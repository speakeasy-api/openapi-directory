import { SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
import { HandOffTime } from "./handofftime";
/**
 * Information about rotations that recur weekly.
 */
export declare class WeeklySetting extends SpeakeasyBase {
    dayOfWeek: DayOfWeekEnum;
    handOffTime: HandOffTime;
}
