import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * Only return pull requests that are in this state. This parameter can be repeated.
 */
export declare enum GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum {
    Open = "OPEN",
    Merged = "MERGED",
    Declined = "DECLINED",
    Superseded = "SUPERSEDED"
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsRequest extends SpeakeasyBase {
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * Only return pull requests that are in this state. This parameter can be repeated.
     */
    state?: GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified repository does not exist.
     */
    error?: Record<string, any>;
    /**
     * All pull requests on the specified repository.
     */
    paginatedPullrequests?: shared.PaginatedPullrequests;
}
