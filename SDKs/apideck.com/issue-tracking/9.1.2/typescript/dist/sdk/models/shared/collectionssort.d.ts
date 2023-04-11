import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Collections
 */
export declare enum CollectionsSortByEnum {
    Name = "name",
    CreatedAt = "created_at",
    UpdatedAt = "updated_at"
}
/**
 * Apply sorting
 */
export declare class CollectionsSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Collections
     */
    by?: CollectionsSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
