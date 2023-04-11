import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Files
 */
export declare enum FilesSortByEnum {
    UpdatedAt = "updated_at",
    Name = "name"
}
/**
 * Apply sorting
 */
export declare class FilesSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Files
     */
    by?: FilesSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
