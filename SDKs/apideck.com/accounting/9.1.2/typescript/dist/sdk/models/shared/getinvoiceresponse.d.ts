import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
/**
 * Invoice
 */
export declare class GetInvoiceResponse extends SpeakeasyBase {
    data: Invoice;
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
