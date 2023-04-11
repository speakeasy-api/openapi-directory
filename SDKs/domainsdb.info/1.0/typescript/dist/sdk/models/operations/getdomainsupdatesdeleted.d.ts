import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainsUpdatesDeletedRequest extends SpeakeasyBase {
    /**
     * API key
     */
    apiKey?: string;
    /**
     * Request date
     */
    date?: string;
    /**
     * Results per page
     */
    limit?: number;
    /**
     * Search page to request
     */
    page?: string;
}
export declare class GetDomainsUpdatesDeletedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchResults?: shared.SearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
