import { SpeakeasyBase } from "../../../internal/utils";
import { OrderType } from "./ordertype";
/**
 * OrderTypes
 */
export declare class GetOrderTypeResponse extends SpeakeasyBase {
    data: OrderType;
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
