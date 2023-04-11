import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Range } from "./range";
/**
 * List of node comments
 */
export declare class CommentList extends SpeakeasyBase {
    /**
     * List of node comments
     */
    items: Comment[];
    /**
     * Range information
     */
    range: Range;
}
