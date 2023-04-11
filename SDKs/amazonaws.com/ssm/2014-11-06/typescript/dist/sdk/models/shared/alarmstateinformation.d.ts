import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalAlarmStateEnum } from "./externalalarmstateenum";
/**
 * The details about the state of your CloudWatch alarm.
 */
export declare class AlarmStateInformation extends SpeakeasyBase {
    name: string;
    state: ExternalAlarmStateEnum;
}
