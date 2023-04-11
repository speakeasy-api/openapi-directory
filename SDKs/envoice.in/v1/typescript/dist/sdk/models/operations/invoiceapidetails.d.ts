import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiDetailsRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceFullDetailsApiModel?: shared.InvoiceFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
