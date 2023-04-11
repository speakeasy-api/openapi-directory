import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
 */
export declare enum ReposListForAuthenticatedUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Can be one of `created`, `updated`, `pushed`, `full_name`.
 */
export declare enum ReposListForAuthenticatedUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
/**
 * Can be one of `all`, `owner`, `public`, `private`, `member`. Note: For GitHub AE, can be one of `all`, `owner`, `internal`, `private`, `member`. Default: `all`
 *
 * @remarks
 *
 * Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
 */
export declare enum ReposListForAuthenticatedUserTypeEnum {
    All = "all",
    Owner = "owner",
    Public = "public",
    Private = "private",
    Member = "member"
}
/**
 * Can be one of `all`, `public`, or `private`. Note: For GitHub AE, can be one of `all`, `internal`, or `private`.
 */
export declare enum ReposListForAuthenticatedUserVisibilityEnum {
    All = "all",
    Public = "public",
    Private = "private"
}
export declare class ReposListForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of values. Can include:
     *
     * @remarks
     * \* `owner`: Repositories that are owned by the authenticated user.
     * \* `collaborator`: Repositories that the user has been added to as a collaborator.
     * \* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
     */
    affiliation?: string;
    /**
     * Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    before?: Date;
    /**
     * Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
     */
    direction?: ReposListForAuthenticatedUserDirectionEnum;
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
     * Can be one of `created`, `updated`, `pushed`, `full_name`.
     */
    sort?: ReposListForAuthenticatedUserSortEnum;
    /**
     * Can be one of `all`, `owner`, `public`, `private`, `member`. Note: For GitHub AE, can be one of `all`, `owner`, `internal`, `private`, `member`. Default: `all`
     *
     * @remarks
     *
     * Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
     */
    type?: ReposListForAuthenticatedUserTypeEnum;
    /**
     * Can be one of `all`, `public`, or `private`. Note: For GitHub AE, can be one of `all`, `internal`, or `private`.
     */
    visibility?: ReposListForAuthenticatedUserVisibilityEnum;
}
export declare class ReposListForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    repositories?: shared.Repository[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
