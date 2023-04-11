import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByCategoryLinks } from "./reportbycategorylinks";
export declare class ReportByCategory extends SpeakeasyBase {
    /**
     * The product count for this category. This includes all the products that have been imported and can still have associated clicks and orders.
     */
    allProductCount: number;
    /**
     * The catalog category identifier
     */
    catalogCategoryId: string;
    /**
     * The catalog category path
     */
    catalogCategoryPath?: string[];
    /**
     * The catalog product count for this category. This includes all products that are still present in your imported catalog.
     */
    catalogProductCount: number;
    /**
     * The click count for this category
     */
    clickCount: number;
    /**
     * The cost for this category
     */
    cost: number;
    /**
     * The enabled product count for this category. This includes all products that are still present in your imported catalog and have not been disabled via the optimisation feature.
     */
    enabledProductCount: number;
    links: ReportByCategoryLinks;
    /**
     * The margin for this category
     */
    margin?: number;
    /**
     * The order count for this category
     */
    orderCount: number;
    /**
     * The performance indicator based on the performance indicator formula indicated in the request for this category
     */
    performanceIndicator: number;
    /**
     * The Return On Investment for this category
     */
    roi?: number;
    /**
     * The product sold count count for this category
     */
    soldProductCount: number;
    /**
     * The total sales for this category
     */
    totalSales: number;
}
