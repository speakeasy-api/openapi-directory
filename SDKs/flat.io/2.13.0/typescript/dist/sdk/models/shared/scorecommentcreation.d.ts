import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";
/**
 * Creation of a comment
**/
export declare class ScoreCommentCreation extends SpeakeasyBase {
    comment: string;
    context?: ScoreCommentContext;
    mentions?: string[];
    rawComment?: string;
    replyTo?: string;
    revision?: string;
}
