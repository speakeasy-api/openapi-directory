import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetLeaderboardsRequest extends SpeakeasyBase {
    /**
     * The Destiny membershipId of the user to retrieve.
     */
    destinyMembershipId: number;
    /**
     * Maximum number of top players to return. Use a large number to get entire leaderboard.
     */
    maxtop?: number;
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
    /**
     * List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
     */
    modes?: string;
    /**
     * ID of stat to return rather than returning all Leaderboard stats.
     */
    statid?: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2GetLeaderboards200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, Record<string, shared.DestinyHistoricalStatsDestinyLeaderboard>>;
    throttleSeconds?: number;
}
export declare class Destiny2GetLeaderboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
