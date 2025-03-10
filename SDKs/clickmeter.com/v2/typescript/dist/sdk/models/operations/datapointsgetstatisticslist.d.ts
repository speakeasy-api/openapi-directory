import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
 */
export declare enum DataPointsGetStatisticsListGroupByEnum {
    Week = "week",
    Month = "month"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum DataPointsGetStatisticsListTimeFrameEnum {
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
export declare class DataPointsGetStatisticsListRequest extends SpeakeasyBase {
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
    /**
     * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
     */
    groupBy?: DataPointsGetStatisticsListGroupByEnum;
    /**
     * Id of the datapoint
     */
    id: number;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: DataPointsGetStatisticsListTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class DataPointsGetStatisticsListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
