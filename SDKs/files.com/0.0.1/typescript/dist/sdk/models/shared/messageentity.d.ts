import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCommentEntity } from "./messagecommententity";
/**
 * List Messages
 */
export declare class MessageEntity extends SpeakeasyBase {
    /**
     * Message body.
     */
    body?: string;
    /**
     * Comments.
     */
    comments?: MessageCommentEntity[];
    /**
     * Message ID
     */
    id?: number;
    /**
     * Message subject.
     */
    subject?: string;
}
