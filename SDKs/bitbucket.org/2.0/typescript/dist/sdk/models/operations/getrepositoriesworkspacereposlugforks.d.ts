import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugForksSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * Filters the result based on the authenticated user's role on each repository.
 *
 * @remarks
 *
 * * **member**: returns repositories to which the user has explicit read access
 * * **contributor**: returns repositories to which the user has explicit write access
 * * **admin**: returns repositories to which the user has explicit administrator access
 * * **owner**: returns all repositories owned by the current user
 *
 */
export declare enum GetRepositoriesWorkspaceRepoSlugForksRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member",
    Owner = "owner"
}
export declare class GetRepositoriesWorkspaceRepoSlugForksRequest extends SpeakeasyBase {
    /**
     * Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     *
     * @remarks
     *
     */
    q?: string;
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * Filters the result based on the authenticated user's role on each repository.
     *
     * @remarks
     *
     * * **member**: returns repositories to which the user has explicit read access
     * * **contributor**: returns repositories to which the user has explicit write access
     * * **admin**: returns repositories to which the user has explicit administrator access
     * * **owner**: returns all repositories owned by the current user
     *
     */
    role?: GetRepositoriesWorkspaceRepoSlugForksRoleEnum;
    /**
     * Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugForksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * All forks.
     */
    paginatedRepositories?: shared.PaginatedRepositories;
}
