import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";
/**
 * Update of a comment
**/
export declare class ScoreCommentUpdate extends SpeakeasyBase {
    comment?: string;
    context?: ScoreCommentContext;
    rawComment?: string;
    revision?: string;
}
