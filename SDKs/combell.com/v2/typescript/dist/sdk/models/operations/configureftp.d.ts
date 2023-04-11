import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureFtpRequest extends SpeakeasyBase {
    ftpConfiguration?: shared.FtpConfiguration;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class ConfigureFtpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
