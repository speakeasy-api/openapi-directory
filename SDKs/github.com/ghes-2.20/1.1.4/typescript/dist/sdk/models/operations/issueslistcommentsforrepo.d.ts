import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Either `asc` or `desc`. Ignored without the `sort` parameter.
 */
export declare enum IssuesListCommentsForRepoDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class IssuesListCommentsForRepoRequest extends SpeakeasyBase {
    /**
     * Either `asc` or `desc`. Ignored without the `sort` parameter.
     */
    direction?: IssuesListCommentsForRepoDirectionEnum;
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
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
    /**
     * One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
     */
    sort?: shared.SortEnum;
}
export declare class IssuesListCommentsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    issueComments?: shared.IssueComment[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
