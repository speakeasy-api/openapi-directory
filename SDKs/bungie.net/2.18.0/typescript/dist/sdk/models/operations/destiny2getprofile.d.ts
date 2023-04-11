import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetProfileRequest extends SpeakeasyBase {
    /**
     * A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
     */
    components?: number[];
    /**
     * Destiny membership ID.
     */
    destinyMembershipId: number;
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
}
/**
 * The response for GetDestinyProfile, with components for character and item-level data.
 */
export declare class Destiny2GetProfile200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * The response for GetDestinyProfile, with components for character and item-level data.
     */
    response?: shared.DestinyResponsesDestinyProfileResponse;
    throttleSeconds?: number;
}
export declare class Destiny2GetProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
