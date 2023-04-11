import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiUriRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiUriResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceUriApiModel?: shared.InvoiceUriApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
