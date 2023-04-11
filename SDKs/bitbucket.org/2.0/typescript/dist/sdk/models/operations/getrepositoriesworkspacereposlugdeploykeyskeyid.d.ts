import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest extends SpeakeasyBase {
    /**
     * The key ID matching the deploy key.
     */
    keyId: string;
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
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Deploy key matching the key ID
     */
    deployKey?: Record<string, any>;
    /**
     * If the specified user or repository does not exist
     */
    error?: Record<string, any>;
}
