import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingRvIdRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Listing id to get all the listing attributes
     */
    id: string;
}
export declare class GetListingRvIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * RV listing for the given id
     */
    rvListing?: shared.RVListing;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
