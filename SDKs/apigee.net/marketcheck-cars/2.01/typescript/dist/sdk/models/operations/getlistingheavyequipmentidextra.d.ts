import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingHeavyEquipmentIdExtraRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Listing id to get all the listing attributes
     */
    id: string;
}
export declare class GetListingHeavyEquipmentIdExtraResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Heavy equipment ListingAttributes for the given listing id
     */
    listingExtraAttributes?: shared.ListingExtraAttributes;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
