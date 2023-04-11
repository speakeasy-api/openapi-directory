import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSnippetsWorkspaceEncodedIdCommentsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostSnippetsWorkspaceEncodedIdCommentsRequest extends SpeakeasyBase {
    /**
     * The contents of the new comment.
     */
    requestBody: Record<string, any>;
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
export declare class PostSnippetsWorkspaceEncodedIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have access to the snippet.
     */
    error?: Record<string, any>;
    /**
     * The newly created comment.
     */
    snippetComment?: Record<string, any>;
}
