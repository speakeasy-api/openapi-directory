import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRangeEnum } from "./timerangeenum";
import { UsageRecord } from "./usagerecord";
/**
 * Success
 */
export declare class GetUsageStatisticsResponse extends SpeakeasyBase {
    nextToken?: string;
    records?: UsageRecord[];
    timeRange?: TimeRangeEnum;
}
