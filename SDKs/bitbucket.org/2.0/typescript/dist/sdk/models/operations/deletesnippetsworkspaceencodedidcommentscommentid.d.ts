import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdRequest extends SpeakeasyBase {
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
export declare class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user is not the author of the comment.
     */
    error?: Record<string, any>;
}
