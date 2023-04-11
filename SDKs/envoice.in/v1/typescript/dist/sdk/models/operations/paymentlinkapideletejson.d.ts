import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentLinkApiDeleteJsonRequest extends SpeakeasyBase {
    paymentLink: shared.PaymentLink;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    paymentLinkApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    paymentLinkApiDeleteJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
