import { SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";
/**
 * Listing
 */
export declare class GetListingResponse extends SpeakeasyBase {
    data: Listing;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
