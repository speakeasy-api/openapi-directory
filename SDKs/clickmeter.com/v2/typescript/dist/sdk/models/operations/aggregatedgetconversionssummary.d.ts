import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Direction of sort "asc" or "desc"
 */
export declare enum AggregatedGetConversionsSummarySortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Status of conversion ("deleted"/"active")
 */
export declare enum AggregatedGetConversionsSummaryStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum AggregatedGetConversionsSummaryTimeFrameEnum {
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
export declare class AggregatedGetConversionsSummaryRequest extends SpeakeasyBase {
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
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
    sortDirection?: AggregatedGetConversionsSummarySortDirectionEnum;
    /**
     * Status of conversion ("deleted"/"active")
     */
    status?: AggregatedGetConversionsSummaryStatusEnum;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: AggregatedGetConversionsSummaryTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class AggregatedGetConversionsSummaryResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedSummaryResult?: shared.ApiCoreDtoAggregatedAggregatedSummaryResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
