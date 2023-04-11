import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
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
     * Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
     */
    filter?: ChecksListForRefFilterEnum;
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
    /**
     * Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
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
