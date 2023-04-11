import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Invoices
 */
export declare enum InvoicesSortByEnum {
    UpdatedAt = "updated_at"
}
/**
 * Apply sorting
 */
export declare class InvoicesSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Invoices
     */
    by?: InvoicesSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
