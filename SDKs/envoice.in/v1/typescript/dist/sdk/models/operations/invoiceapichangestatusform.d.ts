import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvoiceApiChangeStatusFormRequest extends SpeakeasyBase {
    changeStatusApiModel: shared.ChangeStatusApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiChangeStatusFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    invoiceApiChangeStatusForm200ApplicationJSONBoolean?: boolean;
    /**
     * OK
     */
    invoiceApiChangeStatusForm200TextJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
