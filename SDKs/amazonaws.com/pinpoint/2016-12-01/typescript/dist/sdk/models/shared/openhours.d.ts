import { SpeakeasyBase } from "../../../internal/utils";
import { OpenHoursRule } from "./openhoursrule";
/**
 * The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.
 */
export declare class OpenHours extends SpeakeasyBase {
    custom?: Record<string, OpenHoursRule[]>;
    email?: Record<string, OpenHoursRule[]>;
    push?: Record<string, OpenHoursRule[]>;
    sms?: Record<string, OpenHoursRule[]>;
    voice?: Record<string, OpenHoursRule[]>;
}
