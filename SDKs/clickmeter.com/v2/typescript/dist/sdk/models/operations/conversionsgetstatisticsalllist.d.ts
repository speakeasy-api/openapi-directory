import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
 */
export declare enum ConversionsGetStatisticsAllListGroupByEnum {
    Week = "week",
    Month = "month"
}
/**
 * Status of conversion ("deleted"/"active")
 */
export declare enum ConversionsGetStatisticsAllListStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum ConversionsGetStatisticsAllListTimeFrameEnum {
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
export declare class ConversionsGetStatisticsAllListRequest extends SpeakeasyBase {
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
    /**
     * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
     */
    groupBy?: ConversionsGetStatisticsAllListGroupByEnum;
    /**
     * Status of conversion ("deleted"/"active")
     */
    status?: ConversionsGetStatisticsAllListStatusEnum;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: ConversionsGetStatisticsAllListTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class ConversionsGetStatisticsAllListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
