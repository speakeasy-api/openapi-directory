import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetVendorRequest extends SpeakeasyBase {
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
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
    /**
     * The Hash identifier of the Vendor to be returned.
     */
    vendorHash: number;
}
/**
 * A response containing all of the components for a vendor.
 */
export declare class Destiny2GetVendor200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * A response containing all of the components for a vendor.
     */
    response?: shared.DestinyResponsesDestinyVendorResponse;
    throttleSeconds?: number;
}
export declare class Destiny2GetVendorResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
