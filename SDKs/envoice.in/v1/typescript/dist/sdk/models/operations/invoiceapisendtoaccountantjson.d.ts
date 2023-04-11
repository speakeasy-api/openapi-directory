import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiSendToAccountantJsonRequest extends SpeakeasyBase {
    sendInvoiceToAccountantApiModel: shared.SendInvoiceToAccountantApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiSendToAccountantJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiSendToAccountantJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    invoiceApiSendToAccountantJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
