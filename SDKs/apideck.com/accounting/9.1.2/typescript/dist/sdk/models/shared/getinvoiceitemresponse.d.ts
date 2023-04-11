import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceItem } from "./invoiceitem";
/**
 * InvoiceItems
 */
export declare class GetInvoiceItemResponse extends SpeakeasyBase {
    data: InvoiceItem;
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
