import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureHttp2Request extends SpeakeasyBase {
    http2Configuration?: shared.Http2Configuration;
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
     * Site name where HTTP/2 should be configured.<br />
     *
     * @remarks
     * For HTTP/2 to work correctly, the site must have ssl enabled.
     */
    siteNameQueryParameter: string;
}
export declare class ConfigureHttp2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
