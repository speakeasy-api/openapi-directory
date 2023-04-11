import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetVendorsRequest extends SpeakeasyBase {
    /**
     * The Destiny Character ID of the character for whom we're getting vendor info.
     */
    characterId: number;
    /**
     * A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
     */
    components?: number[];
    /**
     * Destiny membership ID of another user. You may be denied.
     */
    destinyMembershipId: number;
    /**
     * The filter of what vendors and items to return, if any.
     */
    filter?: number;
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
}
/**
 * A response containing all of the components for all requested vendors.
 */
export declare class Destiny2GetVendors200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * A response containing all of the components for all requested vendors.
     */
    response?: shared.DestinyResponsesDestinyVendorsResponse;
    throttleSeconds?: number;
}
export declare class Destiny2GetVendorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
