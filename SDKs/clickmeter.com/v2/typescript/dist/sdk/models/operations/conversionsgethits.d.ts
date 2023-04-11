import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
 */
export declare enum ConversionsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
/**
 * Timeframe of the request. See list at $timeframeList
 */
export declare enum ConversionsGetHitsTimeframeEnum {
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
export declare class ConversionsGetHitsRequest extends SpeakeasyBase {
    /**
     * Id of the conversion
     */
    conversionId: number;
    /**
     * Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
     */
    filter?: ConversionsGetHitsFilterEnum;
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     */
    fromDay?: string;
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
    timeframe: ConversionsGetHitsTimeframeEnum;
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     */
    toDay?: string;
}
export declare class ConversionsGetHitsResponse extends SpeakeasyBase {
    apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
