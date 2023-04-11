import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSitemapsSamplesOutOfConfigRequest extends SpeakeasyBase {
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
export declare class GetSitemapsSamplesOutOfConfig200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: string[];
    size?: number;
}
export declare class GetSitemapsSamplesOutOfConfigResponse extends SpeakeasyBase {
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
    getSitemapsSamplesOutOfConfig200ApplicationJSONObject?: GetSitemapsSamplesOutOfConfig200ApplicationJSON;
}
