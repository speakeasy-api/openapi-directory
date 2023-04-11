import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceCustomer } from "./ecommercecustomer";
/**
 * Customers
 */
export declare class GetEcommerceCustomerResponse extends SpeakeasyBase {
    data: EcommerceCustomer;
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
