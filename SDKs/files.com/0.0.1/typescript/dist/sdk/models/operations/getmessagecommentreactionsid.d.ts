import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessageCommentReactionsIdRequest extends SpeakeasyBase {
    /**
     * Message Comment Reaction ID.
     */
    id: number;
}
export declare class GetMessageCommentReactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The MessageCommentReactions object.
     */
    messageCommentReactionEntity?: shared.MessageCommentReactionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
