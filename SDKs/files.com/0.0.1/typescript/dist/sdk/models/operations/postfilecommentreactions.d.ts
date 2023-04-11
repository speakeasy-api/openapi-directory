import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFileCommentReactionsRequestBody extends SpeakeasyBase {
    /**
     * Emoji to react with.
     */
    emoji: string;
    /**
     * ID of file comment to attach reaction to.
     */
    fileCommentId: number;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostFileCommentReactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileCommentReactions object.
     */
    fileCommentReactionEntity?: shared.FileCommentReactionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
