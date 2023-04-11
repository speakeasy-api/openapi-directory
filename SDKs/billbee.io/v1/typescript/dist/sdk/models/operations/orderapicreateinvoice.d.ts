import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiCreateInvoiceRequest extends SpeakeasyBase {
    /**
     * The internal billbee id of the order
     */
    id: number;
    /**
     * If true, the PDF is included in the response as base64 encoded string
     */
    includeInvoicePdf?: boolean;
    /**
     * You can pass the id of a connected cloud printer/storage to send the invoice to it
     */
    sendToCloudId?: number;
    /**
     * You can pass the id of an invoice template to overwrite the assigned template for invoice creation
     */
    templateId?: number;
}
export declare class OrderApiCreateInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiCreateInvoice200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiCreateInvoice200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
