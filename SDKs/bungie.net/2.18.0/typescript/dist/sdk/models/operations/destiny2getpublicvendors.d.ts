import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetPublicVendorsRequest extends SpeakeasyBase {
    /**
     * A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
     */
    components?: number[];
}
/**
 * A response containing all valid components for the public Vendors endpoint.
 *
 * @remarks
 *  It is a decisively smaller subset of data compared to what we can get when we know the specific user making the request.
 *  If you want any of the other data - item details, whether or not you can buy it, etc... you'll have to call in the context of a character. I know, sad but true.
 */
export declare class Destiny2GetPublicVendors200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * A response containing all valid components for the public Vendors endpoint.
     *
     * @remarks
     *  It is a decisively smaller subset of data compared to what we can get when we know the specific user making the request.
     *  If you want any of the other data - item details, whether or not you can buy it, etc... you'll have to call in the context of a character. I know, sad but true.
     */
    response?: shared.DestinyResponsesDestinyPublicVendorsResponse;
    throttleSeconds?: number;
}
export declare class Destiny2GetPublicVendorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
