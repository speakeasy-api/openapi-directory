import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAvailablePhpVersionsRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class GetAvailablePhpVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    phpVersions?: shared.PhpVersion[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
