import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerSupportCustomer } from "./customersupportcustomer";
/**
 * CustomerSupportCustomers
 */
export declare class GetCustomerSupportCustomerResponse extends SpeakeasyBase {
    data: CustomerSupportCustomer;
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
