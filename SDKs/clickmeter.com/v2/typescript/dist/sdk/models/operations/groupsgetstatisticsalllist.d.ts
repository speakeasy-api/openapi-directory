import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
 */
export declare enum GroupsGetStatisticsAllListGroupByEnum {
    Deleted = "deleted",
    Active = "active"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum GroupsGetStatisticsAllListTimeFrameEnum {
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
export declare class GroupsGetStatisticsAllListRequest extends SpeakeasyBase {
    /**
     * Is the group is marked as favourite
     */
    favourite?: boolean;
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
    /**
     * The temporal entity you want to group by ("week"/"month"). If unspecified is "day".
     */
    groupBy?: GroupsGetStatisticsAllListGroupByEnum;
    /**
     * Status of group ("deleted"/"active")
     */
    status?: string;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tag?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: GroupsGetStatisticsAllListTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class GroupsGetStatisticsAllListResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
