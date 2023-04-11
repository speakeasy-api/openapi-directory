import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiSendToClientJsonRequest extends SpeakeasyBase {
    sendInvoiceToClientApiModel: shared.SendInvoiceToClientApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiSendToClientJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiSendToClientJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    invoiceApiSendToClientJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
