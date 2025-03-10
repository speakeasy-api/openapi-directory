import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingCarUkIdRequest extends SpeakeasyBase {
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
export declare class GetListingCarUkIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Listing for the given id
     */
    listing?: shared.Listing;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
