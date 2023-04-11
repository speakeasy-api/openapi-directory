import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to get products based on these filters
 */
export declare class GetProductsRequest extends SpeakeasyBase {
    /**
     * The catalog category path
     */
    categoryPath?: string[];
    columnIdList?: string[];
    /**
     * Search for product by ean
     */
    ean?: string;
    /**
     * Search for existing products or not. If null you will received both.
     */
    exists?: boolean;
    /**
     * Search for product by mpn
     */
    mpn?: string;
    /**
     * The catalog column identifier (catalog or custom column)
     */
    orderByCatalogColumnId?: string;
    /**
     * Indicates the page number
     */
    pageNumber: number;
    /**
     * Indicate the item count per page
     */
    pageSize: number;
    /**
     * Filter with a list of product identifier
     */
    productIdList?: string[];
    /**
     * Search for product by sku
     */
    sku?: string;
    /**
     * Search for products containing this title
     */
    title?: string;
    /**
     * Do not retrieve sub categories. By default, this value is set to false
     */
    withoutSubCategories?: boolean;
}
