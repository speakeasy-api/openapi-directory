import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiUpdateRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiUpdateRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceFullDetailsApiModel?: shared.InvoiceFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
