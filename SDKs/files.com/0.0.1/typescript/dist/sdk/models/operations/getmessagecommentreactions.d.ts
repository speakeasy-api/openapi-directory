import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessageCommentReactionsRequest extends SpeakeasyBase {
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * Message comment to return reactions for.
     */
    messageCommentId: number;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class GetMessageCommentReactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of MessageCommentReactions objects.
     */
    messageCommentReactionEntities?: shared.MessageCommentReactionEntity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
