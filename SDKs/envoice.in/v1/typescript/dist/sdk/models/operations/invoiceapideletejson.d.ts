import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiDeleteJsonRequest extends SpeakeasyBase {
    invoiceDeleteApiModel: shared.InvoiceDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    invoiceApiDeleteJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
