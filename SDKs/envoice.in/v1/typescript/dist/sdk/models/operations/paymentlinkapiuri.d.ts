import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentLinkApiUriRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiUriResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    paymentLinkUriApiModel?: shared.PaymentLinkUriApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
