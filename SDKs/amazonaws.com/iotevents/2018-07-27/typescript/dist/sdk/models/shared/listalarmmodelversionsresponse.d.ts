import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmModelVersionSummary } from "./alarmmodelversionsummary";
/**
 * Success
 */
export declare class ListAlarmModelVersionsResponse extends SpeakeasyBase {
    alarmModelVersionSummaries?: AlarmModelVersionSummary[];
    nextToken?: string;
}
