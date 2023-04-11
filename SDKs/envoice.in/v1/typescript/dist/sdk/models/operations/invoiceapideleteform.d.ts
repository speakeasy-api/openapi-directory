import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiDeleteFormRequest extends SpeakeasyBase {
    invoiceDeleteApiModel: shared.InvoiceDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    invoiceApiDeleteForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
