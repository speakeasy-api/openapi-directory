import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetHistoricalStatsRequest extends SpeakeasyBase {
    /**
     * The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
     */
    characterId: number;
    /**
     * Last day to return when daily stats are requested. Use the format YYYY-MM-DD. Currently, we cannot allow more than 31 days of daily data to be requested in a single request.
     */
    dayend?: Date;
    /**
     * First day to return when daily stats are requested. Use the format YYYY-MM-DD. Currently, we cannot allow more than 31 days of daily data to be requested in a single request.
     */
    daystart?: Date;
    /**
     * The Destiny membershipId of the user to retrieve.
     */
    destinyMembershipId: number;
    /**
     * Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals
     */
    groups?: number[];
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
    /**
     * Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
     */
    modes?: number[];
    /**
     * Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity
     */
    periodType?: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class Destiny2GetHistoricalStats200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, shared.DestinyHistoricalStatsDestinyHistoricalStatsByPeriod>;
    throttleSeconds?: number;
}
export declare class Destiny2GetHistoricalStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
