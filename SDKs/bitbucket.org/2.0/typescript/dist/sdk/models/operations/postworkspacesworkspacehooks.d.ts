import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspacesWorkspaceHooksSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostWorkspacesWorkspaceHooksRequest extends SpeakeasyBase {
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PostWorkspacesWorkspaceHooksResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have permission to install webhooks on the specified workspace.
     */
    error?: Record<string, any>;
    /**
     * If the webhook was registered successfully.
     */
    webhookSubscription?: Record<string, any>;
}
