import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams extends SpeakeasyBase {
    commit: string;
    key: string;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams;
    request?: Record<string, any>;
    security: PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    commitstatus?: Record<string, any>;
    error?: Record<string, any>;
}
