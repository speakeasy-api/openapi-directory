import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiInvoiceDeletecategoryJsonRequest extends SpeakeasyBase {
    invoiceCategoryDeleteApiModel: shared.InvoiceCategoryDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceDeletecategoryJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postApiInvoiceDeletecategoryJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    postApiInvoiceDeletecategoryJSON200TextJSONInt32Integer?: number;
}
