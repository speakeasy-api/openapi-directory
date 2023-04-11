import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiChangeStatusJsonRequest extends SpeakeasyBase {
    changeStatusApiModel: shared.ChangeStatusApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiChangeStatusJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiChangeStatusJSON200ApplicationJSONBoolean?: boolean;
    /**
     * OK
     */
    invoiceApiChangeStatusJSON200TextJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
