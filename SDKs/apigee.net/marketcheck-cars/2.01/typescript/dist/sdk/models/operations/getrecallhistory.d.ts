import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecallHistoryRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Page number to fetch the results for the given criteria. Default is 1.
     */
    page?: number;
    /**
     * The VIN to identify the car. Must be a valid 17 char VIN
     */
    vin: string;
}
export declare class GetRecallHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Reacll info for the given vin
     */
    searchResponse?: shared.SearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
