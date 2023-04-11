import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmRecommendation } from "./alarmrecommendation";
/**
 * Success
 */
export declare class ListAlarmRecommendationsResponse extends SpeakeasyBase {
    alarmRecommendations: AlarmRecommendation[];
    nextToken?: string;
}
