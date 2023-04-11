import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChecksListSuitesForRefRequest extends SpeakeasyBase {
    /**
     * Filters check suites by GitHub App `id`.
     */
    appId?: number;
    /**
     * Returns check runs with the specified `name`.
     */
    checkName?: string;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * ref parameter
     */
    ref: string;
    repo: string;
}
/**
 * Response
 */
export declare class ChecksListSuitesForRef200ApplicationJSON extends SpeakeasyBase {
    checkSuites: shared.CheckSuite[];
    totalCount: number;
}
export declare class ChecksListSuitesForRefResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checksListSuitesForRef200ApplicationJSONObject?: ChecksListSuitesForRef200ApplicationJSON;
}
