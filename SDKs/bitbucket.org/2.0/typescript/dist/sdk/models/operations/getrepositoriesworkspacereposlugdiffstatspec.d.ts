import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest extends SpeakeasyBase {
    /**
     * Generate diffs that ignore whitespace
     */
    ignoreWhitespace?: boolean;
    /**
     * This parameter is deprecated and will be removed at the end
     *
     * @remarks
     * of 2022. The 'topic' parameter should be used instead. The
     * 'merge' and 'topic' parameters cannot be both used at the same
     * time.
     *
     * If true, the source commit is merged into the
     * destination commit, and then a diffstat from the
     * destination to the merge result is returned. If false,
     * a simple 'two dot' diffstat between the source and
     * destination is returned. True if omitted.
     */
    merge?: boolean;
    /**
     * Limit the diffstat to a particular file (this parameter
     *
     * @remarks
     * can be repeated for multiple paths).
     */
    path?: string;
    /**
     * Whether to perform rename detection, true if omitted.
     */
    renames?: boolean;
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * A commit SHA (e.g. `3a8b42`) or a commit range using double dot
     *
     * @remarks
     * notation (e.g. `3a8b42..9ff173`).
     *
     */
    spec: string;
    /**
     * If true, returns 2-way 'three-dot' diff.
     *
     * @remarks
     * This is a diff between the source commit and the merge base
     * of the source commit and the destination commit.
     * If false, a simple 'two dot' diff between the source and
     * destination is returned.
     */
    topic?: boolean;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If generating the diffstat timed out.
     */
    error?: Record<string, any>;
    /**
     * The diff stats
     */
    paginatedDiffstats?: shared.PaginatedDiffstats;
}
