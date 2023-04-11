import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentLinkApiAllRequest extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    listResultPaymentLink?: shared.ListResultPaymentLink;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
