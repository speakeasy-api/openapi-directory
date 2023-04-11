import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest extends SpeakeasyBase {
    /**
     * The commit's SHA1.
     */
    commit: string;
    /**
     * Path to the file.
     */
    path: string;
    /**
     *
     * @remarks
     * Query string to narrow down the response as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     */
    q?: string;
    /**
     *
     * @remarks
     * When `true`, Bitbucket will follow the history of the file across
     * renames (this is the default behavior). This can be turned off by
     * specifying `false`.
     */
    renames?: string;
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
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the repository does not exist.
     */
    error?: Record<string, any>;
    /**
     * A paginated list of commits that modified the specified file
     */
    paginatedFiles?: shared.PaginatedFiles;
}
