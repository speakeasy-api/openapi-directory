import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPatchSpecRequest extends SpeakeasyBase {
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
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPatchSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the diff was too large and timed out.
     *
     * @remarks
     *
     * Since this endpoint does not employ any form of pagination, but
     * instead returns the diff as a single document, it can run into
     * trouble on very large diffs. If Bitbucket times out in cases
     * like these, a 555 status code is returned.
     */
    error?: Record<string, any>;
}
