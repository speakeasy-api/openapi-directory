import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiUpdateJsonRequest extends SpeakeasyBase {
    invoiceUpdateApiModel: shared.InvoiceUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiUpdateJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceFullDetailsApiModel?: shared.InvoiceFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
