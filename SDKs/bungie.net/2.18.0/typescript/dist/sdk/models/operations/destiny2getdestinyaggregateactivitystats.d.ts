import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetDestinyAggregateActivityStatsRequest extends SpeakeasyBase {
    /**
     * The specific character whose activities should be returned.
     */
    characterId: number;
    /**
     * The Destiny membershipId of the user to retrieve.
     */
    destinyMembershipId: number;
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2GetDestinyAggregateActivityStats200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.DestinyHistoricalStatsDestinyAggregateActivityResults;
    throttleSeconds?: number;
}
export declare class Destiny2GetDestinyAggregateActivityStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
