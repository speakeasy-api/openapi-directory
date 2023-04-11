import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetClanAggregateStatsRequest extends SpeakeasyBase {
    /**
     * Group ID of the clan whose leaderboards you wish to fetch.
     */
    groupId: number;
    /**
     * List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
     */
    modes?: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2GetClanAggregateStats200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.DestinyHistoricalStatsDestinyClanAggregateStat[];
    throttleSeconds?: number;
}
export declare class Destiny2GetClanAggregateStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
