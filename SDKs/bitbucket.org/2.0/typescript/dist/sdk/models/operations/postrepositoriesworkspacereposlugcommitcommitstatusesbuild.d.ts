import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest extends SpeakeasyBase {
    /**
     * The new commit status object.
     */
    requestBody?: Record<string, any>;
    /**
     * The commit's SHA1.
     */
    commit: string;
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The newly created build status object.
     */
    commitstatus?: Record<string, any>;
    /**
     * If the repository, commit, or build status key does not exist
     */
    error?: Record<string, any>;
}
