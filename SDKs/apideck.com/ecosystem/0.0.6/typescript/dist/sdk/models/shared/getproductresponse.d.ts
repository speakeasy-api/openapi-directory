import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Product
 */
export declare class GetProductResponse extends SpeakeasyBase {
    data: Product;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
