import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiInvoiceAllcategoriesRequest extends SpeakeasyBase {
    query?: string;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GetApiInvoiceAllcategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    listResultInvoiceCategoryApiModel?: shared.ListResultInvoiceCategoryApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
