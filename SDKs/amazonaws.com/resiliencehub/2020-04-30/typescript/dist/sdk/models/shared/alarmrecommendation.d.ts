import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmTypeEnum } from "./alarmtypeenum";
import { RecommendationItem } from "./recommendationitem";
/**
 * Defines a recommendation for a CloudWatch alarm.
 */
export declare class AlarmRecommendation extends SpeakeasyBase {
    appComponentName?: string;
    description?: string;
    items?: RecommendationItem[];
    name: string;
    prerequisite?: string;
    recommendationId: string;
    referenceId: string;
    type: AlarmTypeEnum;
}
