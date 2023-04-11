import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiAllRequest extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    listResultInvoiceDetailsApiModel?: shared.ListResultInvoiceDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
