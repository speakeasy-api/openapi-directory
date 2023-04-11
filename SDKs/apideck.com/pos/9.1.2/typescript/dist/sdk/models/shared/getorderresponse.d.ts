import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Orders
 */
export declare class GetOrderResponse extends SpeakeasyBase {
    data: Order;
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
