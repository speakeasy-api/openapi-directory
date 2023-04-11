import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiInvoiceNewcategoryFormRequest extends SpeakeasyBase {
    invoiceCategoryCreateApiModel: shared.InvoiceCategoryCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceNewcategoryFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
