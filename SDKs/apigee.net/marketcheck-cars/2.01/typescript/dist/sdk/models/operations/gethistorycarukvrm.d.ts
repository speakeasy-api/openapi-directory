import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHistoryCarUkVrmRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
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
     * The VRM to identify the car.
     */
    vrm: string;
}
export declare class GetHistoryCarUkVrmResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Online listing history for the given vrm
     */
    historicalListings?: shared.HistoricalListing[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
