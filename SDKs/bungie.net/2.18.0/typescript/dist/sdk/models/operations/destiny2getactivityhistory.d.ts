import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetActivityHistoryRequest extends SpeakeasyBase {
    /**
     * The id of the character to retrieve.
     */
    characterId: number;
    /**
     * Number of rows to return
     */
    count?: number;
    /**
     * The Destiny membershipId of the user to retrieve.
     */
    destinyMembershipId: number;
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
    /**
     * A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.
     */
    mode?: number;
    /**
     * Page number to return, starting with 0.
     */
    page?: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2GetActivityHistory200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.DestinyHistoricalStatsDestinyActivityHistoryResults;
    throttleSeconds?: number;
}
export declare class Destiny2GetActivityHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
