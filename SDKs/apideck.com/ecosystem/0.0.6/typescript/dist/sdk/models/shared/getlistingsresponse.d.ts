import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Listing } from "./listing";
import { Meta } from "./meta";
/**
 * Listings
 */
export declare class GetListingsResponse extends SpeakeasyBase {
    data: Listing[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
