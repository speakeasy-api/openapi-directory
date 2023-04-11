import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsProductColumnFilter } from "./analyticsproductcolumnfilter";
export declare class AnalyticsProductColumnFilters extends SpeakeasyBase {
    /**
     * Describes a filter on a product's column.
     *
     * @remarks
     * The key is the column identifier of your catalog or a custom column.
     *
     */
    additionalAnalyticsProductColumnFilters?: Record<string, AnalyticsProductColumnFilter>;
    /**
     * The product sku filter
     */
    sku?: string;
    /**
     * The product title filter
     */
    title?: string;
}
