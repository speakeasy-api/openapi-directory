import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceOrder } from "./ecommerceorder";
/**
 * Orders
 */
export declare class GetEcommerceOrderResponse extends SpeakeasyBase {
    data: EcommerceOrder;
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
