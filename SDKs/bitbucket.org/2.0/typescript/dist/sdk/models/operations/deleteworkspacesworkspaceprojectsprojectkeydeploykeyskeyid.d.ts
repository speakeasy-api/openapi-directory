import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest extends SpeakeasyBase {
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
export declare class DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the current user does not have permission to delete a key for the specified project
     */
    error?: Record<string, any>;
}
