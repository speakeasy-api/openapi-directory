import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest extends SpeakeasyBase {
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
export declare class PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid deploy key inputs
     */
    error?: Record<string, any>;
    /**
     * The project deploy key that was created
     */
    projectDeployKey?: Record<string, any>;
}
