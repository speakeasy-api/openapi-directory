import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingMotorcycleIdRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Listing id to get all the listing attributes
     */
    id: string;
}
export declare class GetListingMotorcycleIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Motorcycle listing for the given id
     */
    motorcycleListing?: shared.MotorcycleListing;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
