import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
 */
export declare enum ChecksListForSuiteFilterEnum {
    Latest = "latest",
    All = "all"
}
export declare class ChecksListForSuiteRequest extends SpeakeasyBase {
    /**
     * Returns check runs with the specified `name`.
     */
    checkName?: string;
    /**
     * check_suite_id parameter
     */
    checkSuiteId: number;
    /**
     * Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
     */
    filter?: ChecksListForSuiteFilterEnum;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    /**
     * Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
     */
    status?: shared.StatusEnum;
}
/**
 * Response
 */
export declare class ChecksListForSuite200ApplicationJSON extends SpeakeasyBase {
    checkRuns: shared.CheckRun[];
    totalCount: number;
}
export declare class ChecksListForSuiteResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checksListForSuite200ApplicationJSONObject?: ChecksListForSuite200ApplicationJSON;
}
