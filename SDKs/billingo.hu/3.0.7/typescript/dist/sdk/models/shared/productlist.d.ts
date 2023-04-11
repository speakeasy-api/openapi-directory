import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * A object with a data property that contains an array of up to limit products. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty.
 */
export declare class ProductList extends SpeakeasyBase {
    currentPage?: number;
    data?: Product[];
    lastPage?: number;
    nextPageUrl?: string;
    perPage?: number;
    prevPageUrl?: string;
    total?: number;
}
