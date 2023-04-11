import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class DeleteSnippetsWorkspaceEncodedIdNodeIdRequest extends SpeakeasyBase {
    /**
     * The snippet id.
     */
    encodedId: string;
    /**
     * A commit revision (SHA1).
     */
    nodeId: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class DeleteSnippetsWorkspaceEncodedIdNodeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the snippet is private and the request was not authenticated.
     */
    error?: Record<string, any>;
}
