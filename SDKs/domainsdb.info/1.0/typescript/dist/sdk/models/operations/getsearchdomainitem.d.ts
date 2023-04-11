import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchDomainItemRequest extends SpeakeasyBase {
    /**
     * A record includes
     */
    a?: string;
    /**
     * CNAME record includes
     */
    cname?: string;
    /**
     * MX record includes
     */
    mx?: string;
    /**
     * NS record includes
     */
    ns?: string;
    /**
     * TXT record includes
     */
    txt?: string;
    /**
     * API key
     */
    apiKey?: string;
    /**
     * Hosting Country
     */
    country?: string;
    /**
     * Request date
     */
    date?: string;
    /**
     * Domain includes
     */
    domain?: string;
    /**
     * Dead or Not, default not
     */
    isDead?: boolean;
    /**
     * Results per page
     */
    limit?: number;
    /**
     * Search page to request
     */
    page?: string;
    /**
     * In Zone
     */
    zone?: string;
}
export declare class GetSearchDomainItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchResults?: shared.SearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
