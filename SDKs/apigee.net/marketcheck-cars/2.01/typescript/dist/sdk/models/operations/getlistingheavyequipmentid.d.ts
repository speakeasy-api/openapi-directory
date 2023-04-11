import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListingHeavyEquipmentIdRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Listing id to get all the listing attributes
     */
    id: string;
}
export declare class GetListingHeavyEquipmentIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Heavy equipment listing for the given id
     */
    heavyEquipmentsListing?: shared.HeavyEquipmentsListing;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
