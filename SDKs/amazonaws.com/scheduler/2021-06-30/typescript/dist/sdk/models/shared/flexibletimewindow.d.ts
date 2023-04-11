import { SpeakeasyBase } from "../../../internal/utils";
import { FlexibleTimeWindowModeEnum } from "./flexibletimewindowmodeenum";
/**
 * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
 */
export declare class FlexibleTimeWindow extends SpeakeasyBase {
    maximumWindowInMinutes?: number;
    mode: FlexibleTimeWindowModeEnum;
}
