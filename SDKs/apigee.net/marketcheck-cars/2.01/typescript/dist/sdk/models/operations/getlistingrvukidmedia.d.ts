import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingRvUkIdMediaRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Listing id to get all the listing attributes
     */
    id: string;
}
export declare class GetListingRvUkIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Listing Media for the given listing id
     */
    listingMedia?: shared.ListingMedia;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
