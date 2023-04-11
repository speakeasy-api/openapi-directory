import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
 */
export declare enum DataPointsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum DataPointsGetHitsTimeframeEnum {
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Custom = "custom"
}
export declare class DataPointsGetHitsRequest extends SpeakeasyBase {
    /**
     * Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
     */
    filter?: DataPointsGetHitsFilterEnum;
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
    /**
     * Id of the datapoint
     */
    id: number;
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Offset where to start from (it's the lastKey field in the response object)
     */
    offset?: string;
    /**
     * Timeframe of the request. See list at $timeframeList
     */
    timeframe: DataPointsGetHitsTimeframeEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class DataPointsGetHitsResponse extends SpeakeasyBase {
    apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
