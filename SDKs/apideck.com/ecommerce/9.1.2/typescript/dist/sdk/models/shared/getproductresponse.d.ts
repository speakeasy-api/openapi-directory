import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceProduct } from "./ecommerceproduct";
/**
 * Products
 */
export declare class GetProductResponse extends SpeakeasyBase {
    data: EcommerceProduct;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
