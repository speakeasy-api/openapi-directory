import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be either `asc` or `desc`. Ignored without `sort` parameter.
 */
export declare enum PullsListReviewCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PullsListReviewCommentsRequest extends SpeakeasyBase {
    /**
     * Can be either `asc` or `desc`. Ignored without `sort` parameter.
     */
    direction?: PullsListReviewCommentsDirectionEnum;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    pullNumber: number;
    repo: string;
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
    /**
     * One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
     */
    sort?: shared.SortEnum;
}
export declare class PullsListReviewCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestReviewComments?: shared.PullRequestReviewComment[];
}
