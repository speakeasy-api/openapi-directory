import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { Product } from "./product";
/**
 * Product list
 */
export declare class ProductList extends SpeakeasyBase {
    paginationResult: BeezUPCommonPaginationResult;
    products: Product[];
}
