import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest extends SpeakeasyBase {
    /**
     * The key ID matching the project deploy key.
     */
    keyId: string;
    /**
     * The project in question. This is the actual `key` assigned
     *
     * @remarks
     * to the project.
     *
     */
    projectKey: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified workspace or project is not accessible to the current user
     */
    error?: Record<string, any>;
    /**
     * Project deploy key matching the key ID
     */
    projectDeployKey?: Record<string, any>;
}
