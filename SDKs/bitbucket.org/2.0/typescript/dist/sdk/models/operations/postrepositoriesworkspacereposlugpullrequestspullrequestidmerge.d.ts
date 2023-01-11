import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams extends SpeakeasyBase {
    async?: boolean;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams;
    queryParams: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams;
    request?: Record<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Record<string, any>;
    pullrequest?: Record<string, any>;
}
