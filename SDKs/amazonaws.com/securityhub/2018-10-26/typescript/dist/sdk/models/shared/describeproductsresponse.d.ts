import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Success
 */
export declare class DescribeProductsResponse extends SpeakeasyBase {
    nextToken?: string;
    products: Product[];
}
