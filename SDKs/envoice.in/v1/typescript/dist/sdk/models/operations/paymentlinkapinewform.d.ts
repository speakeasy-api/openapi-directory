import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentLinkApiNewFormRequest extends SpeakeasyBase {
    paymentLink: shared.PaymentLink;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiNewFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    paymentLinkApiNewForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    paymentLinkApiNewForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
