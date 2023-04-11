import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates which sorts of issues to return. Can be one of:
 *
 * @remarks
 * \* `assigned`: Issues assigned to you
 * \* `created`: Issues created by you
 * \* `mentioned`: Issues mentioning you
 * \* `subscribed`: Issues you're subscribed to updates for
 * \* `all` or `repos`: All issues the authenticated user can see, regardless of participation or creation
 */
export declare enum IssuesListForAuthenticatedUserFilterEnum {
    Assigned = "assigned",
    Created = "created",
    Mentioned = "mentioned",
    Subscribed = "subscribed",
    Repos = "repos",
    All = "all"
}
/**
 * What to sort results by. Can be either `created`, `updated`, `comments`.
 */
export declare enum IssuesListForAuthenticatedUserSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}
/**
 * Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
 */
export declare enum IssuesListForAuthenticatedUserStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    direction?: shared.DirectionEnum;
    /**
     * Indicates which sorts of issues to return. Can be one of:
     *
     * @remarks
     * \* `assigned`: Issues assigned to you
     * \* `created`: Issues created by you
     * \* `mentioned`: Issues mentioning you
     * \* `subscribed`: Issues you're subscribed to updates for
     * \* `all` or `repos`: All issues the authenticated user can see, regardless of participation or creation
     */
    filter?: IssuesListForAuthenticatedUserFilterEnum;
    /**
     * A list of comma separated label names. Example: `bug,ui,@high`
     */
    labels?: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
    /**
     * What to sort results by. Can be either `created`, `updated`, `comments`.
     */
    sort?: IssuesListForAuthenticatedUserSortEnum;
    /**
     * Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
     */
    state?: IssuesListForAuthenticatedUserStateEnum;
}
export declare class IssuesListForAuthenticatedUserResponse extends SpeakeasyBase {
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
    issues?: shared.Issue[];
}
