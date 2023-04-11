import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest extends SpeakeasyBase {
    requestBody?: Record<string, any>;
    /**
     * Default value is false.
     *
     * @remarks
     *
     *
     * When set to true, runs merge asynchronously and
     * immediately returns a 202 with polling link to
     * the task-status API in the Location header.
     *
     *
     * When set to false, runs merge and waits for it to
     * complete, returning 200 when it succeeds. If the
     * duration of the merge exceeds a timeout threshold,
     * the API returns a 202 with polling link to the
     * task-status API in the Location header.
     */
    async?: boolean;
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
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the merge took too long and timed out.
     *
     * @remarks
     * In this case the caller should retry the request later
     */
    error?: Record<string, any>;
    /**
     * The pull request object.
     */
    pullrequest?: Record<string, any>;
}
