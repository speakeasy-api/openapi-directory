import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiSendToAccountantFormRequest extends SpeakeasyBase {
    sendInvoiceToAccountantApiModel: shared.SendInvoiceToAccountantApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiSendToAccountantFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiSendToAccountantForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    invoiceApiSendToAccountantForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
