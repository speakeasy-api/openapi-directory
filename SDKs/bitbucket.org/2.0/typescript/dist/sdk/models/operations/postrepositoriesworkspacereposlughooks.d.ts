import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugHooksPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugHooksRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugHooksPathParams;
    security: PostRepositoriesWorkspaceRepoSlugHooksSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugHooksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    webhookSubscription?: Record<string, any>;
}
