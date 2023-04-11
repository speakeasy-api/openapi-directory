import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCommentReactionEntity } from "./messagecommentreactionentity";
/**
 * List Message Comments
 */
export declare class MessageCommentEntity extends SpeakeasyBase {
    /**
     * Comment body.
     */
    body?: string;
    /**
     * Message Comment ID
     */
    id?: number;
    /**
     * Reactions to this comment.
     */
    reactions?: MessageCommentReactionEntity[];
}
