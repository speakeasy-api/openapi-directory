import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest extends SpeakeasyBase {
    /**
     * The contents to update the comment to.
     */
    requestBody: Record<string, any>;
    /**
     * The id of the comment.
     */
    commentId: number;
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
export declare class PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have access to the snippet.
     */
    error?: Record<string, any>;
    /**
     * The updated comment object.
     */
    snippetComment?: Record<string, any>;
}
