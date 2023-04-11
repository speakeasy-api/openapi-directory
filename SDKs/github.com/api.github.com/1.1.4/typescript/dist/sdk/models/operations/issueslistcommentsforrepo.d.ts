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
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
    /**
     * The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
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
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
