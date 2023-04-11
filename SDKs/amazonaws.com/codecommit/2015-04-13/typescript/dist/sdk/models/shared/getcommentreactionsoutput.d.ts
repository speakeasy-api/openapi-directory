import { SpeakeasyBase } from "../../../internal/utils";
import { ReactionForComment } from "./reactionforcomment";
/**
 * Success
 */
export declare class GetCommentReactionsOutput extends SpeakeasyBase {
    nextToken?: string;
    reactionsForComment: ReactionForComment[];
}
