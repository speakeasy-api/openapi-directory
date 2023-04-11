import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Direction of sort "asc" or "desc"
 */
export declare enum AggregatedGetDatapointsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Status of datapoint ("deleted"/"active"/"paused"/"spam")
 */
export declare enum AggregatedGetDatapointsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum AggregatedGetDatapointsSummaryTimeFrameEnum {
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
export declare enum AggregatedGetDatapointsSummaryTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class AggregatedGetDatapointsSummaryRequest extends SpeakeasyBase {
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
    groupId?: number;
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
    sortDirection?: AggregatedGetDatapointsSummarySortDirectionEnum;
    /**
     * Status of datapoint ("deleted"/"active"/"paused"/"spam")
     */
    status?: AggregatedGetDatapointsSummaryStatusEnum;
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
    timeFrame: AggregatedGetDatapointsSummaryTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
    /**
     * Type of datapoint ("tl"/"tp")
     */
    type: AggregatedGetDatapointsSummaryTypeEnum;
}
export declare class AggregatedGetDatapointsSummaryResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
