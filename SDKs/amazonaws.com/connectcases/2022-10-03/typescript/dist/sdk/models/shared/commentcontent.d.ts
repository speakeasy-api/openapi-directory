import { SpeakeasyBase } from "../../../internal/utils";
import { CommentBodyTextTypeEnum } from "./commentbodytexttypeenum";
/**
 * Represents the content of a <code>Comment</code> to be returned to agents.
 */
export declare class CommentContent extends SpeakeasyBase {
    body: string;
    contentType: CommentBodyTextTypeEnum;
}
