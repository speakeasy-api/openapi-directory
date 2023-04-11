import { SpeakeasyBase } from "../../../internal/utils";
import { InsightTypeEnum } from "./insighttypeenum";
import { StartTimeRange } from "./starttimerange";
/**
 *  Used to filter for insights that have any status.
 */
export declare class ListInsightsAnyStatusFilter extends SpeakeasyBase {
    startTimeRange: StartTimeRange;
    type: InsightTypeEnum;
}
