import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListCommitsRequest extends SpeakeasyBase {
    /**
     * GitHub login or email address by which to filter by commit author.
     */
    author?: string;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Only commits containing this file path will be returned.
     */
    path?: string;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    /**
     * SHA or branch to start listing commits from. Default: the repository’s default branch (usually `master`).
     */
    sha?: string;
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
    /**
     * Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    until?: Date;
}
export declare class ReposListCommitsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    commits?: shared.Commit[];
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
}
