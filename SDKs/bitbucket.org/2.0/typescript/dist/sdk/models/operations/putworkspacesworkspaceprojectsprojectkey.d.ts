import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkspacesWorkspaceProjectsProjectKeySecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutWorkspacesWorkspaceProjectsProjectKeyRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
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
export declare class PutWorkspacesWorkspaceProjectsProjectKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The requesting user isn't authorized to update or create the project.
     */
    error?: Record<string, any>;
    /**
     * The existing project is has been updated.
     */
    project?: Record<string, any>;
}
