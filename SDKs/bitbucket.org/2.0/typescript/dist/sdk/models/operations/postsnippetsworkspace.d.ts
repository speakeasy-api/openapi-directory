import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSnippetsWorkspaceSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostSnippetsWorkspaceRequest extends SpeakeasyBase {
    /**
     * The new snippet object.
     */
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
export declare class PostSnippetsWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the request was not authenticated
     */
    error?: Record<string, any>;
    /**
     * The newly created snippet object.
     */
    snippet?: Record<string, any>;
}
