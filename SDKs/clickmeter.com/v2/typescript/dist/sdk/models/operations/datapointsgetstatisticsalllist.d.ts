import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
 */
export declare enum DataPointsGetStatisticsAllListGroupByEnum {
    Week = "week",
    Month = "month"
}
/**
 * Status of datapoint ("deleted"/"active"/"paused"/"spam")
 */
export declare enum DataPointsGetStatisticsAllListStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum DataPointsGetStatisticsAllListTimeFrameEnum {
    Today = "today",
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Last12months = "last12months",
    Lastyear = "lastyear",
    Currentyear = "currentyear",
    Beginning = "beginning",
    Custom = "custom"
}
/**
 * Type of datapoint ("tl"/"tp")
 */
export declare enum DataPointsGetStatisticsAllListTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class DataPointsGetStatisticsAllListRequest extends SpeakeasyBase {
    /**
     * Is the datapoint is marked as favourite
     */
    favourite?: boolean;
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
    /**
     * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
     */
    groupBy?: DataPointsGetStatisticsAllListGroupByEnum;
    /**
     * Status of datapoint ("deleted"/"active"/"paused"/"spam")
     */
    status?: DataPointsGetStatisticsAllListStatusEnum;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tag?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: DataPointsGetStatisticsAllListTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
    /**
     * Type of datapoint ("tl"/"tp")
     */
    type: DataPointsGetStatisticsAllListTypeEnum;
}
export declare class DataPointsGetStatisticsAllListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
