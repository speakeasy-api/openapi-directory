import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceResponse } from "./invoiceresponse";
/**
 * Invoice updated
 */
export declare class UpdateInvoiceResponse extends SpeakeasyBase {
    data: InvoiceResponse;
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
