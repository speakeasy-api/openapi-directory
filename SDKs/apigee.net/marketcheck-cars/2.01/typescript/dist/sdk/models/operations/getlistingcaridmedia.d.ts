import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingCarIdMediaRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Flag on whether to include api_key in response API urls (if any)
     */
    appendApiKey?: boolean;
    /**
     * Listing id to get all the listing attributes
     */
    id: string;
}
export declare class GetListingCarIdMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * ListingMedia for the given listing id
     */
    listingMedia?: shared.ListingMedia;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
