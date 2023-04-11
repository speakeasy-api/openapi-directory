import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of group ("deleted"/"active")
 */
export declare enum GroupsGetStatisticsAggregatedSingleStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum GroupsGetStatisticsAggregatedSingleTimeFrameEnum {
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
export declare class GroupsGetStatisticsAggregatedSingleRequest extends SpeakeasyBase {
    /**
     * Is the group is marked as favourite
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
     * Status of group ("deleted"/"active")
     */
    status?: GroupsGetStatisticsAggregatedSingleStatusEnum;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tag?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: GroupsGetStatisticsAggregatedSingleTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class GroupsGetStatisticsAggregatedSingleResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
