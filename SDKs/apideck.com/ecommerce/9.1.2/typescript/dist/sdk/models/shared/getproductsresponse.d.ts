import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceProduct } from "./ecommerceproduct";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Products
 */
export declare class GetProductsResponse extends SpeakeasyBase {
    data: EcommerceProduct[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
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
