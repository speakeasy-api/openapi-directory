import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";
/**
 * The type of the comment
 */
export declare enum ScoreCommentTypeEnum {
    Document = "document",
    Inline = "inline"
}
/**
 * Comment added on a sheet music
 */
export declare class ScoreComment extends SpeakeasyBase {
    /**
     * The comment text that can includes mentions using the following
     *
     * @remarks
     * format: `@[id:username]`.
     *
     */
    comment?: string;
    /**
     * The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
     *
     * @remarks
     *
     */
    context?: ScoreCommentContext;
    /**
     * The date when the comment was posted
     */
    date?: Date;
    /**
     * The comment unique identifier
     */
    id?: string;
    /**
     * The list of user identifier mentioned on the score
     */
    mentions?: string[];
    /**
     * The date of the last comment modification
     */
    modificationDate?: Date;
    /**
     * A raw version of the comment, that can be displayed without parsing
     *
     * @remarks
     * the mentions.
     *
     */
    rawComment?: string;
    /**
     * When the comment is a reply to another comment, the unique identifier of the parent comment
     *
     * @remarks
     *
     */
    replyTo?: string;
    /**
     * For inline comments, the comment can be marked as resolved and will be hidden in the future responses
     *
     * @remarks
     *
     */
    resolved?: boolean;
    /**
     * If the user is marked as resolved, this will contain the unique identifier of the User who marked this comment as resolved
     *
     * @remarks
     *
     */
    resolvedBy?: string;
    /**
     * The unique identifier of revision the comment was posted
     */
    revision?: string;
    /**
     * The unique identifier of the score where the comment was posted
     */
    score?: string;
    /**
     * `true  if the message has been detected as spam and hidden from other users
     *
     * @remarks
     *
     */
    spam?: boolean;
    /**
     * The type of the comment
     */
    type?: ScoreCommentTypeEnum;
    /**
     * The author unique identifier
     */
    user?: string;
}
