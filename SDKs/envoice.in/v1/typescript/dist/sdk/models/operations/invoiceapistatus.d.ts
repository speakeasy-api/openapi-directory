import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InvoiceApiStatusRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
/**
 * OK
 */
export declare enum InvoiceApiStatus200TextJSONEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
/**
 * OK
 */
export declare enum InvoiceApiStatus200ApplicationXMLEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
/**
 * OK
 */
export declare enum InvoiceApiStatus200ApplicationJSONEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}
export declare class InvoiceApiStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiStatus200ApplicationJSONStringEnum?: InvoiceApiStatus200ApplicationJSONEnum;
    /**
     * OK
     */
    invoiceApiStatus200TextJSONStringEnum?: InvoiceApiStatus200TextJSONEnum;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
