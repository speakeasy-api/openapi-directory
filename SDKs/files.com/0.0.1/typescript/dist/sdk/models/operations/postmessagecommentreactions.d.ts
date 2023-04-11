import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMessageCommentReactionsRequestBody extends SpeakeasyBase {
    /**
     * Emoji to react with.
     */
    emoji: string;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostMessageCommentReactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The MessageCommentReactions object.
     */
    messageCommentReactionEntity?: shared.MessageCommentReactionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
