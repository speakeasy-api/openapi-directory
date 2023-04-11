import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLinksTopDomainsRequest extends SpeakeasyBase {
    /**
     * Analysis' identifier
     */
    analysisSlug: string;
    /**
     * Page Number
     */
    page?: number;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * Page Size
     */
    size?: number;
    /**
     * User's identifier
     */
    username: string;
}
/**
 * Successful operation
 */
export declare class GetLinksTopDomains200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.LinksTopDomains[];
    size?: number;
}
export declare class GetLinksTopDomainsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getLinksTopDomains200ApplicationJSONObject?: GetLinksTopDomains200ApplicationJSON;
}
