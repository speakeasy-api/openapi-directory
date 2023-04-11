import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InvoiceApiChangeStatusRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiChangeStatusRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiChangeStatusRaw200ApplicationJSONBoolean?: boolean;
    /**
     * OK
     */
    invoiceApiChangeStatusRaw200TextJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
