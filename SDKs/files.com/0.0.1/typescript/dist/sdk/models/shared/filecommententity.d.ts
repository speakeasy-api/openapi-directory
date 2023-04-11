import { SpeakeasyBase } from "../../../internal/utils";
import { FileCommentReactionEntity } from "./filecommentreactionentity";
/**
 * List File Comments by path
 */
export declare class FileCommentEntity extends SpeakeasyBase {
    /**
     * Comment body.
     */
    body?: string;
    /**
     * File Comment ID
     */
    id?: number;
    /**
     * Reactions to this comment.
     */
    reactions?: FileCommentReactionEntity[];
}
