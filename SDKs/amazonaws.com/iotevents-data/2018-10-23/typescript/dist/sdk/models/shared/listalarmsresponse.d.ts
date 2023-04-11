import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmSummary } from "./alarmsummary";
/**
 * Success
 */
export declare class ListAlarmsResponse extends SpeakeasyBase {
    alarmSummaries?: AlarmSummary[];
    nextToken?: string;
}
