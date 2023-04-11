import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeAutoRedirectRequest extends SpeakeasyBase {
    /**
     * Auto redirect config.
     */
    autoRedirectConfig?: shared.AutoRedirectConfig;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Specific hostname.
     */
    hostname: string;
}
export declare class ChangeAutoRedirectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
