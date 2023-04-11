import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiNewFormRequest extends SpeakeasyBase {
    invoiceCreateApiModel: shared.InvoiceCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiNewFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceFullDetailsApiModel?: shared.InvoiceFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
