import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest extends SpeakeasyBase {
    /**
     * The pull request that is to be updated.
     */
    requestBody?: Record<string, any>;
    /**
     * The id of the pull request.
     */
    pullRequestId: number;
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
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the input document was invalid.
     */
    error?: Record<string, any>;
    /**
     * The updated pull request
     */
    pullrequest?: Record<string, any>;
}
