import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum ConversionsGetStatisticsSingleTimeFrameEnum {
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
export declare class ConversionsGetStatisticsSingleRequest extends SpeakeasyBase {
    /**
     * Id of the conversion
     */
    conversionId: number;
    /**
     * Is the datapoint marked as favourite
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
     * Filter by this tag name
     */
    tag?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeFrame: ConversionsGetStatisticsSingleTimeFrameEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class ConversionsGetStatisticsSingleResponse extends SpeakeasyBase {
    apiCoreDtoAggregatedAggregatedResult?: shared.ApiCoreDtoAggregatedAggregatedResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
