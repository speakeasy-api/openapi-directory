import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSnippetsWorkspaceEncodedIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetSnippetsWorkspaceEncodedIdRequest extends SpeakeasyBase {
    /**
     * The snippet id.
     */
    encodedId: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the snippet is private and the request was not authenticated.
     */
    error?: Record<string, any>;
    /**
     * The snippet object.
     */
    snippet?: Record<string, any>;
}
