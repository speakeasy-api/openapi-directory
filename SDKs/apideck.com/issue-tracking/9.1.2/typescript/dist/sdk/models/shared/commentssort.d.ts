import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Comments
 */
export declare enum CommentsSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at"
}
/**
 * Apply sorting
 */
export declare class CommentsSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Comments
     */
    by?: CommentsSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
