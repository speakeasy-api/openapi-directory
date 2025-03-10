import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceOrder } from "./ecommerceorder";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Orders
 */
export declare class GetEcommerceOrdersResponse extends SpeakeasyBase {
    data: EcommerceOrder[];
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
