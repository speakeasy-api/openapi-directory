import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Bills
 */
export declare enum BillsSortByEnum {
    UpdatedAt = "updated_at"
}
/**
 * Apply sorting
 */
export declare class BillsSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Bills
     */
    by?: BillsSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
