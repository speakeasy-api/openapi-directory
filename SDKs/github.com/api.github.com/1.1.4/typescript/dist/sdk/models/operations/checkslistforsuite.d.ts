import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
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
     * The unique identifier of the check suite.
     */
    checkSuiteId: number;
    /**
     * Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
     */
    filter?: ChecksListForSuiteFilterEnum;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * Returns check runs with the specified `status`.
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
