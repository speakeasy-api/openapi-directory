import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateHostHeaderRequest extends SpeakeasyBase {
    /**
     * Add host header request
     */
    addHostHeaderRequest?: shared.AddHostHeaderRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Automatically added
     */
    siteNamePathParameter: string;
    /**
     * Name of the site on the linux hosting.
     */
    siteNameQueryParameter: string;
}
export declare class CreateHostHeaderResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
