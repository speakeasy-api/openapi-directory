import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest extends SpeakeasyBase {
    /**
     * The issue id
     */
    issueId: string;
    /**
     *
     * @remarks
     * Query string to narrow down the response. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.
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
     * Name of a response property to sort results. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)
     * for details.
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
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The specified repository or issue does not exist or does not have the issue tracker enabled.
     */
    error?: Record<string, any>;
    /**
     * Returns all the issue changes that were made on the specified issue.
     */
    paginatedLogEntries?: shared.PaginatedLogEntries;
}
