import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiPdfRequest extends SpeakeasyBase {
    id: number;
    signedVersion?: boolean;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiPdfResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceUriApiModel?: shared.InvoiceUriApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
