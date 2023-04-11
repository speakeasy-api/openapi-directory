import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetUniqueWeaponHistoryRequest extends SpeakeasyBase {
    /**
     * The id of the character to retrieve.
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
export declare class Destiny2GetUniqueWeaponHistory200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.DestinyHistoricalStatsDestinyHistoricalWeaponStatsData;
    throttleSeconds?: number;
}
export declare class Destiny2GetUniqueWeaponHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
