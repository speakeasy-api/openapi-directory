import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Direction of sort "asc" or "desc"
 */
export declare enum GroupsGetDatapointsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Status of datapoint ("deleted"/"active"/"paused"/"spam")
 */
export declare enum GroupsGetDatapointsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum GroupsGetDatapointsSummaryTimeFrameEnum {
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
export declare enum GroupsGetDatapointsSummaryTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class GroupsGetDatapointsSummaryRequest extends SpeakeasyBase {
    /**
     * Is the datapoint marked as favourite
     */
    favourite?: boolean;
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
    /**
     * Filter by this group id
     */
    id: number;
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Offset where to start from
     */
    offset?: number;
    /**
     * Field to sort by
     */
    sortBy?: string;
    /**
     * Direction of sort "asc" or "desc"
     */
    sortDirection?: GroupsGetDatapointsSummarySortDirectionEnum;
    /**
     * Status of datapoint ("deleted"/"active"/"paused"/"spam")
     */
    status?: GroupsGetDatapointsSummaryStatusEnum;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tag?: string;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: GroupsGetDatapointsSummaryTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
    /**
     * Type of datapoint ("tl"/"tp")
     */
    type?: GroupsGetDatapointsSummaryTypeEnum;
}
export declare class GroupsGetDatapointsSummaryResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
