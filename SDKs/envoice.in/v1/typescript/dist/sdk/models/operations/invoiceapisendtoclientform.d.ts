import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiSendToClientFormRequest extends SpeakeasyBase {
    sendInvoiceToClientApiModel: shared.SendInvoiceToClientApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiSendToClientFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiSendToClientForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    invoiceApiSendToClientForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
