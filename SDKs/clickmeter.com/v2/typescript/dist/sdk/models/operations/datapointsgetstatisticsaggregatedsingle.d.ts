import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of datapoint ("deleted"/"active"/"paused"/"spam")
 */
export declare enum DataPointsGetStatisticsAggregatedSingleStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum DataPointsGetStatisticsAggregatedSingleTimeFrameEnum {
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
export declare enum DataPointsGetStatisticsAggregatedSingleTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class DataPointsGetStatisticsAggregatedSingleRequest extends SpeakeasyBase {
    /**
     * Is the datapoint is marked as favourite
     */
    favourite?: boolean;
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
    /**
     * If using "yesterday" or "today" timeframe you can ask for the hourly detail
     */
    hourly?: boolean;
    /**
     * Status of datapoint ("deleted"/"active"/"paused"/"spam")
     */
    status?: DataPointsGetStatisticsAggregatedSingleStatusEnum;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tag?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: DataPointsGetStatisticsAggregatedSingleTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
    /**
     * Type of datapoint ("tl"/"tp")
     */
    type?: DataPointsGetStatisticsAggregatedSingleTypeEnum;
}
export declare class DataPointsGetStatisticsAggregatedSingleResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
