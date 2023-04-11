import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiInvoiceUpdatecategoryFormRequest extends SpeakeasyBase {
    invoiceCategoryUpdateApiModel: shared.InvoiceCategoryUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceUpdatecategoryFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
