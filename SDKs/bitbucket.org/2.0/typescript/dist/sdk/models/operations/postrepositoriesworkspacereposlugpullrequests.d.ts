import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsRequest extends SpeakeasyBase {
    /**
     * The new pull request.
     *
     * @remarks
     *
     * The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).
     *
     * Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
     */
    requestBody?: Record<string, any>;
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
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the input document was invalid, or if the caller lacks the privilege to create repositories under the targeted account.
     */
    error?: Record<string, any>;
    /**
     * The newly created pull request.
     */
    pullrequest?: Record<string, any>;
}
