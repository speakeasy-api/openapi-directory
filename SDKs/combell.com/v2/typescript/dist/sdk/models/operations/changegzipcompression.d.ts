import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeGzipCompressionRequest extends SpeakeasyBase {
    /**
     * Whether GZIP compression is enabled or not.
     */
    gzipConfig?: shared.GzipConfig;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name
     */
    domainNameQueryParameter: string;
}
export declare class ChangeGzipCompressionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
