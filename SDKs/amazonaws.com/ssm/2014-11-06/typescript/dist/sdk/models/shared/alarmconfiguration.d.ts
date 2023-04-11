import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
/**
 * The details for the CloudWatch alarm you want to apply to an automation or command.
 */
export declare class AlarmConfiguration extends SpeakeasyBase {
    alarms: Alarm[];
    ignorePollAlarmFailure?: boolean;
}
