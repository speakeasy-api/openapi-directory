import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangePhpMemoryLimitRequest extends SpeakeasyBase {
    /**
     * Memory limit config
     */
    updatePhpMemoryLimitRequest?: shared.UpdatePhpMemoryLimitRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class ChangePhpMemoryLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
