import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCarHistoryRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * List of fields to fetch, in case the default fields list in the response is to be trimmed down
     */
    fields?: string;
    /**
     * Flag to indicate whether to include duplicate historical records as well in the response
     */
    includeDuplicates?: boolean;
    /**
     * Page number to fetch the results for the given criteria. Default is 1.
     */
    page?: number;
    /**
     * Sort order - asc or desc. Default sort order is asc
     */
    sortOrder?: shared.SortOrderEnum;
    /**
     * The VIN to identify the car. Must be a valid 17 char VIN
     */
    vin: string;
}
export declare class GetCarHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Online listing history for the given vin
     */
    historicalListings?: shared.HistoricalListing[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
