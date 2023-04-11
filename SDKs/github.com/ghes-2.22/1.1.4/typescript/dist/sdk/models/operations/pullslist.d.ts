import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
 */
export declare enum PullsListDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).
 */
export declare enum PullsListSortEnum {
    Created = "created",
    Updated = "updated",
    Popularity = "popularity",
    LongRunning = "long-running"
}
/**
 * Either `open`, `closed`, or `all` to filter by state.
 */
export declare enum PullsListStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class PullsListRequest extends SpeakeasyBase {
    /**
     * Filter pulls by base branch name. Example: `gh-pages`.
     */
    base?: string;
    /**
     * The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
     */
    direction?: PullsListDirectionEnum;
    /**
     * Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
     */
    head?: string;
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
     * What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).
     */
    sort?: PullsListSortEnum;
    /**
     * Either `open`, `closed`, or `all` to filter by state.
     */
    state?: PullsListStateEnum;
}
export declare class PullsListResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestSimples?: shared.PullRequestSimple[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
