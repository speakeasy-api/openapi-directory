import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Query string to narrow down the response as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
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
     *
     * @remarks
     * Name of a response property sort the result by as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).
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
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The requesting user isn't an admin of the repository.
     */
    error?: Record<string, any>;
    /**
     * The repository permission for all users in this repository.
     */
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
