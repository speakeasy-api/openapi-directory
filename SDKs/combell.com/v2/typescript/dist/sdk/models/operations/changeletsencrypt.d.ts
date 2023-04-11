import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeLetsEncryptRequest extends SpeakeasyBase {
    /**
     * Let's encrypt config.
     */
    letsEncryptConfig?: shared.LetsEncryptConfig;
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
export declare class ChangeLetsEncryptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
