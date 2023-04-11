import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";
/**
 * Creation of a comment
 */
export declare class ScoreCommentCreation extends SpeakeasyBase {
    /**
     * The comment text that can includes mentions using the following format: `@[id:username]`.
     *
     * @remarks
     *
     */
    comment: string;
    /**
     * The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
     *
     * @remarks
     *
     */
    context?: ScoreCommentContext;
    /**
     * The list of user identifiers mentioned in this comment
     */
    mentions?: string[];
    /**
     * A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.
     *
     * @remarks
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
     * The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.
     *
     * @remarks
     *
     */
    revision?: string;
}
