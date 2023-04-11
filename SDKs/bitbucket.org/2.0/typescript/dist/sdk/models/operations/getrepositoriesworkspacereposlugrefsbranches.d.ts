import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest extends SpeakeasyBase {
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
     * Field by which the results should be sorted as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). The `name`
     * field is handled specially for branches in that, if specified as the sort field, it
     * uses a natural sort order instead of the default lexicographical sort order. For example,
     * it will return ['branch1', 'branch2', 'branch10'] instead of ['branch1', 'branch10', 'branch2'].
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
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the repository is private and the authenticated user does not have
     *
     * @remarks
     * access to it.
     *
     */
    error?: Record<string, any>;
    /**
     * A paginated list of branches matching any filter criteria that were provided.
     */
    paginatedBranches?: shared.PaginatedBranches;
}
