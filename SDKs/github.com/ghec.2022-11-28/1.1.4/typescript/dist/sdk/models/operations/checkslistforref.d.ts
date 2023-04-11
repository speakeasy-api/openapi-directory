import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
 */
export declare enum ChecksListForRefFilterEnum {
    Latest = "latest",
    All = "all"
}
export declare class ChecksListForRefRequest extends SpeakeasyBase {
    appId?: number;
    /**
     * Returns check runs with the specified `name`.
     */
    checkName?: string;
    /**
     * Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
     */
    filter?: ChecksListForRefFilterEnum;
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
     * ref parameter
     */
    ref: string;
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
export declare class ChecksListForRef200ApplicationJSON extends SpeakeasyBase {
    checkRuns: shared.CheckRun[];
    totalCount: number;
}
export declare class ChecksListForRefResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checksListForRef200ApplicationJSONObject?: ChecksListForRef200ApplicationJSON;
}
