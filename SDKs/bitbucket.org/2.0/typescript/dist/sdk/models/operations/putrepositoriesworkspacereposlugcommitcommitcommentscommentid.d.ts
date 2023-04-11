import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest extends SpeakeasyBase {
    /**
     * The updated comment.
     */
    requestBody: Record<string, any>;
    /**
     * The id of the comment.
     */
    commentId: number;
    /**
     * The commit's SHA1.
     */
    commit: string;
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
