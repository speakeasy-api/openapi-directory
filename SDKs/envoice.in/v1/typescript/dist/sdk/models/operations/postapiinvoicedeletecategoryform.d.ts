import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiInvoiceDeletecategoryFormRequest extends SpeakeasyBase {
    invoiceCategoryDeleteApiModel: shared.InvoiceCategoryDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceDeletecategoryFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postApiInvoiceDeletecategoryForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    postApiInvoiceDeletecategoryForm200TextJSONInt32Integer?: number;
}
