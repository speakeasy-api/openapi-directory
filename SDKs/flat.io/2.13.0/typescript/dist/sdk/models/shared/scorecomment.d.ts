import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";
export declare enum ScoreCommentTypeEnum {
    Document = "document",
    Inline = "inline"
}
/**
 * Comment added on a sheet music
**/
export declare class ScoreComment extends SpeakeasyBase {
    comment?: string;
    context?: ScoreCommentContext;
    date?: Date;
    id?: string;
    mentions?: string[];
    modificationDate?: Date;
    rawComment?: string;
    replyTo?: string;
    resolved?: boolean;
    resolvedBy?: string;
    revision?: string;
    score?: string;
    spam?: boolean;
    type?: ScoreCommentTypeEnum;
    user?: string;
}
