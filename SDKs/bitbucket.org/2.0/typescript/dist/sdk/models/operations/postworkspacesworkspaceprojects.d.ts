import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspacesWorkspaceProjectsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostWorkspacesWorkspaceProjectsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PostWorkspacesWorkspaceProjectsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The requesting user isn't authorized to create the project.
     */
    error?: Record<string, any>;
    /**
     * A new project has been created.
     */
    project?: Record<string, any>;
}
