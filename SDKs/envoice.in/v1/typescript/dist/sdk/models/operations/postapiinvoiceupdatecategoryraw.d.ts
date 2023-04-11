import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiInvoiceUpdatecategoryRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceUpdatecategoryRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
