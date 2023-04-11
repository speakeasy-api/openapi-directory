import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentLinkApiNewJsonRequest extends SpeakeasyBase {
    paymentLink: shared.PaymentLink;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiNewJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    paymentLinkApiNewJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    paymentLinkApiNewJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
