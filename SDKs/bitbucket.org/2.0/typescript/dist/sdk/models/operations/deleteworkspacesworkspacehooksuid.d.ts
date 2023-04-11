import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class DeleteWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
    /**
     * Installed webhook's ID
     */
    uid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class DeleteWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have permission to delete the webhook.
     */
    error?: Record<string, any>;
}
