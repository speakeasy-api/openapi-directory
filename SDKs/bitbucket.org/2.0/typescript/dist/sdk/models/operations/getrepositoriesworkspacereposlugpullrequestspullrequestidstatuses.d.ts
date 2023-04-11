import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest extends SpeakeasyBase {
    /**
     * The id of the pull request.
     */
    pullRequestId: number;
    /**
     * Query string to narrow down the response as per
     *
     * @remarks
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
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
     * Field by which the results should be sorted as per
     *
     * @remarks
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     * Defaults to `created_on`.
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
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified repository or pull request does not exist.
     */
    error?: Record<string, any>;
    /**
     * A paginated list of all commit statuses for this pull request.
     */
    paginatedCommitstatuses?: shared.PaginatedCommitstatuses;
}
