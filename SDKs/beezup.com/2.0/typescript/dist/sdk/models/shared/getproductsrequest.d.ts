import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to get products based on these filters
**/
export declare class GetProductsRequest extends SpeakeasyBase {
    categoryPath?: string[];
    columnIdList?: string[];
    ean?: string;
    exists?: boolean;
    mpn?: string;
    orderByCatalogColumnId?: string;
    pageNumber: number;
    pageSize: number;
    productIdList?: string[];
    sku?: string;
    title?: string;
    withoutSubCategories?: boolean;
}
