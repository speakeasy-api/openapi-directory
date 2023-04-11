import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentLinkApiDeleteFormRequest extends SpeakeasyBase {
    paymentLink: shared.PaymentLink;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    paymentLinkApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    paymentLinkApiDeleteForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
