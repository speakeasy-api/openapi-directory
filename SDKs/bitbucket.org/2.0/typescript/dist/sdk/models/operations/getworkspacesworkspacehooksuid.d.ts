import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
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
export declare class GetWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the webhook or workspace does not exist.
     */
    error?: Record<string, any>;
    /**
     * The webhook subscription object.
     */
    webhookSubscription?: Record<string, any>;
}
