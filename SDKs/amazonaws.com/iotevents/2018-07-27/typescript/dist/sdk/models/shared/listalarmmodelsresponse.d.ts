import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmModelSummary } from "./alarmmodelsummary";
/**
 * Success
 */
export declare class ListAlarmModelsResponse extends SpeakeasyBase {
    alarmModelSummaries?: AlarmModelSummary[];
    nextToken?: string;
}
